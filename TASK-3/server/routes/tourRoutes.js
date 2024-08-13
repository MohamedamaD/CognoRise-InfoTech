const express = require("express");
const Tour = require("../models/Tour");

const router = express.Router();

router.get("/search/", async (req, res) => {
  const { query } = req.query;
  console.log(query);
  try {
    const tours = await Tour.find({
      title: { $regex: query, $options: "i" },
    });
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour) {
      const isBooked = await Tour.isBooked(req.params.id);

      res.json({ tour, isBooked });
    } else {
      res.status(404).json({ message: "Tour not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, duration, price, imageUrl, badge, reviews, oldPrice } =
    req.body;

  const tour = new Tour({
    title,
    duration,
    price,
    imageUrl,
    badge,
    reviews,
    oldPrice,
  });

  try {
    const createdTour = await tour.save();
    res.status(201).json(createdTour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ tour });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (tour) {
      await tour.remove();
      res.json({ message: "Tour removed" });
    } else {
      res.status(404).json({ message: "Tour not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
