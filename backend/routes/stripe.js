const express = require("express");
const router = express.Router();
require("dotenv").config();

const stripe = require("stripe")(process.env.PAYMENT);

router.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
