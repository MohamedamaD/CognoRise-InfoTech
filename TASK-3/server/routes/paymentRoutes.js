const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");
const auth = require("../middleware/auth");
const Stripe = require("stripe");
const Tour = require("../models/Tour");
const { validateAccessToken } = require("../validations/token.validation");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
router.post("/create-payment-intent", validateAccessToken, async (req, res) => {
  const { tourId } = req.body;
  const userId = req.user._id;
  try {
    const tour = await Tour.findById(tourId);

    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: tour.price * 100,
      currency: "usd",
      metadata: { tourId, userId },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
