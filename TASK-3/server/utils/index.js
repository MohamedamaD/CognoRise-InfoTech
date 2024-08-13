const hash = require("./hash");
const JWT = require("./JWT");
const OTP = require("./OTP");

module.exports = {
  ...hash,
  ...JWT,
  ...OTP,
};
