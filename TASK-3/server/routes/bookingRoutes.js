const express = require("express");
const Booking = require("../models/Booking");
const Tour = require("../models/Tour");
const User = require("../models/User");
const { validateAccessToken } = require("../validations/token.validation");

const router = express.Router();

router.post("/", validateAccessToken, async (req, res) => {
  const { tourId } = req.body;
  const userId = req.user._id;

  try {
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }

    const booking = new Booking({
      tour: tour._id,
      user: userId,
    });

    await booking.save();

    res.json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
router.get("/", validateAccessToken, async (req, res) => {
  const userId = req.user._id;

  try {
    const bookings = await Booking.find({ user: userId }).populate("tour");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
router.delete("/:bookingId", validateAccessToken, async (req, res) => {
  const { bookingId } = req.params;
  const userId = req.user._id;

  
  try {
    const booking = await Booking.findOneAndDelete({
      _id: bookingId,
      user: userId,
    });

    if (!booking) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Booking not found or not authorized to delete",
        });
    }

    res.json({ success: true, message: "Booking removed successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
module.exports = router;
