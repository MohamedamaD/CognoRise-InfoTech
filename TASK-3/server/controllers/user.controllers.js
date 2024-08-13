const mongoose = require("mongoose");
const User = require("../models/User");
const crypto = require("crypto");
const {
  generateAccessToken,
  generateRefreshToken,
  generateOTP,
  OTP_HTML,
  RESET_HTML,
} = require("../utils");
const userValidations = require("../validations/user.validation");
const sendMail = require("../mails/nodemailer");

async function login(req, res) {
  try {
    console.log(req.body);
    const { error, value } = userValidations.UserLogin.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const user = await User.findOne({ email: value.email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else if (!user.isVerified) {
      return res.status(401).json({
        message:
          "Email not verified yet, please register and verify your email",
      });
    }

    const isMatch = await user.verifyPassword(value.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const userData = user.toObject();

    delete userData.password;
    delete userData.refreshToken;
    delete userData.otpCode;
    delete userData.otpExpiresAt;
    delete userData.isVerified;

    const accessToken = generateAccessToken(userData);
    const refreshToken = generateRefreshToken({ userId: userData._id });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      http: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ message: "Logged in successfully", accessToken });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

async function register(req, res) {
  try {
    const { error, value } = userValidations.CreateUser.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    let user = await User.findOne({ email: value.email });
    if (user) {
      if (user.isVerified) {
        return res.status(400).json({
          message:
            "Email already exists. Please log in or change your information.",
        });
      } else {
        await user.deleteOne();
      }
    }

    const otpCode = generateOTP();
    const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000);

    user = new User({ ...value, otpCode, otpExpiresAt });
    await user.save();

    await sendMail(
      value.email,
      "Your OTP for Verification",
      "",
      OTP_HTML(otpCode, value.email)
    );

    res.status(201).json({
      message: "OTP generated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

async function logout(req, res) {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(400).json({ message: "No refresh token found" });
    }

    const user = await User.findOne({ refreshToken });
    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    res.clearCookie("refreshToken", { http: true, secure: true });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during logout" });
  }
}

async function forgotPassword(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "This email does not exist" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpires = Date.now() + 3600000;
    await user.save();

    const resetLink = `${process.env.CLIENT_ORIGIN}/reset-password?token=${resetToken}&email=${email}`;

    await sendMail(
      email,
      "Password Reset",
      `You requested a password reset. Click the link to reset your password: ${resetLink}`,
      RESET_HTML(resetLink)
    );

    res
      .status(200)
      .json({ message: "Password reset email sent", sendMail: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

async function resetPassword(req, res) {
  try {
    const { token, email, password } = req.body;

    const user = await User.findOne({
      email,
      resetToken: token,
      isVerified: true,
      resetTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Expired token" });
    }

    user.password = password;
    user.resetToken = null;
    user.resetTokenExpires = null;
    await user.save();

    res
      .status(200)
      .json({ message: "Password has been reset successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error });
  }
}

async function verifyOTP(req, res) {
  try {
    const { email, otpCode } = req.body;

    const user = await User.findOne({
      email,
      otpCode,
      otpExpiresAt: { $gt: new Date() },
    });
    if (!user) return res.status(400).json({ message: "OTP Code is expired" });

    user.otpCode = null;
    user.otpExpiresAt = null;
    user.isVerified = true;
    await user.save();

    const userData = user.toObject();

    delete userData.password;
    delete userData.refreshToken;
    delete userData.otpCode;
    delete userData.otpExpiresAt;
    delete userData.isVerified;

    const accessToken = generateAccessToken(userData);
    const refreshToken = generateRefreshToken({ userId: userData._id });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      http: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "User registered successfully",
      accessToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  login,
  register,
  resetPassword,
  forgotPassword,
  logout,
  verifyOTP,
};
