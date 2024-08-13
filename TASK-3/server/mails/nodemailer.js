const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

var transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

const sendMail = async (to, subject, text = "", html) => {
  try {
    var mailOptions = {
      from: process.env.AUTH_EMAIL,
      to,
      subject,
      text,
      html,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
};

module.exports = sendMail;
