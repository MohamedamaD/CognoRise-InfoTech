const otpGenerator = require("otp-generator");
const fs = require("fs");
const path = require("path");

function generateOTP() {
  return otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
  });
}

function OTP_HTML(otpCode, email) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "otp_template.html"
  );
  let template = fs.readFileSync(templatePath, "utf8");
  template = template.replace("{{email}}", email);
  template = template.replace("{{otpCode}}", otpCode);
  return template;
}

function RESET_HTML(link) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "reset_template.html"
  );
  let template = fs.readFileSync(templatePath, "utf8");
  template = template.replace("{{link}}", link);
  return template;
}

module.exports = { generateOTP, OTP_HTML, RESET_HTML };
