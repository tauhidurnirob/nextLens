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
      stripeKey=" sk_test_51HZrZoASRJydd9koKrRDLR2Nsere9ETf1ScCTXENE7VOH5rXCsDGfkPolw9qRlrcMcYT73s1I0kMd9QTYsVTzGHc00qsb6SjZD"
      token={makePayment}
      name="Buy React"
      amount={200}
    >
      <Button color="primary" variant="contained">
        Pay
      </Button>
    </StripeCheckout>
  );
};

export default StripePayment;
