import Stripe from "stripe";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";

dotenv.config();

const stripe = new Stripe(process.env.SECRET_KEY);

export const createCustomer = asyncHandler(async (req, res) => {
  const { token } = req.body;

  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id,
  });
  if (customer) {
    const paymentInfo = await stripe.charges.create({
      customer: customer.id,
      amount: 2500,
      currency: "usd",
      shipping: {
        name: token.card.name,
        address: {
          city: token.card.address_city,
          country: token.card.address_country,
          line1: token.card.address_line1,
          postal_code: token.card.address_zip,
        },
      },
    });
    res.send(paymentInfo);
  } else {
    res.sendStatus(500);
    throw new Error("Invalid Customer");
  }
});
