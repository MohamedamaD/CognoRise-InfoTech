const mongoose = require("mongoose");
const Booking = require("./Booking");

const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  oldPrice: {
    type: Number,
  },
});

tourSchema.statics.isBooked = async function (tourId) {
  try {
    const booking = await Booking.findOne({ tour: tourId });
    return booking;
  } catch (error) {
    console.error("Error checking booking status:", error);
    throw new Error("Unable to check booking status");
  }
};

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
