import Stripe from "stripe";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";

import { v4 as uuidv4 } from "uuid";
dotenv.config();

const stripe = new Stripe(process.env.PUBLISH_KEY, {
  maxNetworkRetries: 2,
});

export const createCustomer = asyncHandler(async (req, res) => {
  const { product, token } = req.body;
  return stripe.customers
    .create({
      email: email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { maxNetworkRetries: 2 }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});
