import React, { useState } from "react";
import { Button } from "@material-ui/core";
import StripeCheckout from "react-stripe-checkout";

import stripeApi from "../../pages/api/stripe";

const StripePayment = () => {
  const [product, setProduct] = useState({
    name: "React form FB",
    price: 100,
    productBy: "Muktadir",
  });

  const makePayment = async (token) => {
    const body = { token, product };
    const { data } = await stripeApi.createPaymentStripe(body);
    console.log(data);
  };
  return (
    <StripeCheckout
      stripeKey="pk_test_51HZrZoASRJydd9konZNtAoNFNfQSJttzAyouQzbGmwuq0mTl6l2c9B4Bw2X0ZnB146zEd5WTLSlC1jfaFRS9X7Ic00MSR4xE3i"
      token={makePayment}
      name="Buy React"
      amount={200 * 100}
      shippingAddress
    >
      <Button color="primary" variant="contained">
        Pay
      </Button>
    </StripeCheckout>
  );
};

export default StripePayment;
