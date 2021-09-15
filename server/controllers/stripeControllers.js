import Stripe from "stripe";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";

dotenv.config();

const stripe = new Stripe(process.env.SECRET_KEY);

export const createCustomer = asyncHandler(async (req, res) => {
  const { token, shipping, price, address } = req.body;

  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id,
  });
  if (customer) {
    const paymentInfo = await stripe.charges.create({
      customer: customer.id,
      amount: price,
      currency: "usd",
      shipping: {
        name: token.card.name,
        address: {
          city: shipping.city,
          state: shipping.stateName,
          line1: address,
          line2: shipping.shortName,
          postal_code: shipping.postalCode,
        },
      },
    });
    res.send(paymentInfo);
  } else {
    res.sendStatus(500);
    throw new Error("Invalid Customer");
  }
});
