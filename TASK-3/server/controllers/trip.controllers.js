const Trip = require("../models/Trip");

async function searchDestinations(req, res) {
  try {
    const destinations = await Trip.find().distinct("destination");
    res.status(200).json({ destinations });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function createItinerary(req, res) {
  try {

    const { userId, destination, startDate, endDate } = req.body;

    const itinerary = await Trip.create({
      userId,
      destination,
      startDate,
      endDate,
      createdAt: new Date(),
    });

    res.status(201).json({ itinerary });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { searchDestinations, createItinerary };
