import React from "react";
import { Button } from "@material-ui/core";
import StripeCheckout from "react-stripe-checkout";

import stripeApi from "../../pages/api/stripe";

const StripePayment = () => {
  const makePayment = async (token) => {
    const body = { token };
    const { data } = await stripeApi.createPaymentStripe(body);
    console.log(data);
  };
  return (
    <StripeCheckout
      stripeKey={process.env.NEXT_PUBLIC_PUBLISH_KEY}
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
