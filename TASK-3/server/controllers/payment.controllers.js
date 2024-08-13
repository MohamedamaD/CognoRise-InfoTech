const Payment = require("../models/Payment");

async function processPayment(req, res) {
  try {
    const { userId, amount, paymentDetails } = req.body;

    const payment = await Payment.create({
      userId,
      amount,
      paymentDetails,
      status: "Success", 
    });
    res.status(201).json({ payment });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { processPayment };
