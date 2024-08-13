const Booking = require("../models/Booking");

async function bookFlight(req, res) {
  try {
    const { userId, tripId, flightDetails } = req.body;

    const booking = await Booking.create({
      userId,
      tripId,
      type: "Flight",
      details: flightDetails,
    });

    res.status(201).json({ booking });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

async function bookHotel(req, res) {
  try {
    const { userId, tripId, hotelDetails } = req.body;

    const booking = await Booking.create({
      userId,
      tripId,
      type: "Hotel",
      details: hotelDetails,
    });

    res.status(201).json({ booking });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { bookFlight, bookHotel };
