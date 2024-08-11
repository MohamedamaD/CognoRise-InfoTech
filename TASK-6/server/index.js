const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Question = require("./models/Question");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.CONNECTION_STRING || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/api/questions/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const questions = await Question.find({ category });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

app.get("/api/categories", async (req, res) => {
  try {
    const categories = await Question.distinct("category");
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
