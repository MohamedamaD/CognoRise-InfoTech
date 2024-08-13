const User = require("../models/User");
const {
  verifyRefreshToken,
  generateAccessToken,
  verifyAccessToken,
} = require("../utils/JWT");

const validateRefreshToken = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = verifyRefreshToken(token);

    if (!decoded)
      return res.status(403).json({ error: "Invalid token provided" });

    const user = await User.findById(decoded.userId).select(
      "name email _id phone address dateOfBirth"
    );

    const accessToken = generateAccessToken(user.toObject());

    res.json({ accessToken });
  } catch (error) {
    console.log("validateRefreshToken error", error);
    res.status(403).json({ error: "Invalid or expired token" });
  }
};

const validateAccessToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null)
      return res.status(401).json({ error: "No token provided" });

    const decoded = verifyAccessToken(token);
    if (!decoded)
      return res.status(403).json({ error: "Invalid token provided" });

    req.user = decoded;
    next();
  } catch (error) {
    console.log("validateAccessToken error", error);
    res.status(403).json({ error: "Invalid or expired token" });
  }
};

module.exports = { validateRefreshToken, validateAccessToken };
