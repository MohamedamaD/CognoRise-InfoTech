const mongoose = require("mongoose");
const { comparePassword, hashPassword } = require("../utils");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },

    resetToken: { type: String, required: false },
    resetTokenExpires: { type: Date, required: false },

    otpCode: { type: String, required: false },
    otpExpiresAt: { type: Date, required: false },
    isVerified: {
      type: Boolean,
      default: false,
    },

    refreshToken: { type: String, required: false },
  },
  { timestamps: true }
);

userSchema.methods.verifyPassword = async function (password) {
  return await comparePassword(password, this.password);
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
  next();
});

userSchema.pre("updateOne", async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    update.password = await hashPassword(update.password);
    this.setUpdate(update);
  }
  next();
});
module.exports = mongoose.model("User", userSchema);
