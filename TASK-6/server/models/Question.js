const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  category: String,
  question: String,
  options: [String],
  answer: String,
});
const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
