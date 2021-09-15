import React, { useState } from "react";
import { Button } from "@material-ui/core";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import stripeApi from "../../pages/api/stripe";
import { shippingSelector } from "./../redux/slices/shippingSlice";
import {
  productSelector,
  resetCartAction,
} from "./../redux/slices/productSlice";
import { payOrderAction } from "../redux/slices/paySlice";

const StripePayment = ({ ...otherProps }) => {
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector(shippingSelector);
  const { cart } = useSelector(productSelector);
  const [loading, setLoading] = useState(false);
  const totalAmount = cart
    .map((item) => item.totalPrice)
    .reduce((acc, cc) => acc + cc, 0);

  const makePayment = async (token) => {
    const body = {
      token,
      shipping: shippingInfo.state,
      address: shippingInfo.address,
      price: totalAmount,
    };
    const { data, ok } = await stripeApi.createPaymentStripe(body);
    setLoading(true);
    if (ok) {
      setLoading(false);
      toast.success("Thanks for purchasing");
      dispatch(payOrderAction(data));
      dispatch(resetCartAction());
    }
  };
  return (
    <>
      <ToastContainer />
      {loading ? (
        <StripeCheckout
          stripeKey={process.env.NEXT_PUBLIC_PUBLISH_KEY}
          token={makePayment}
          name={shippingInfo?.name?.split(" ")[0]}
          amount={totalAmount * 100}
          email={shippingInfo?.email}
          panelLabel="Pay"
        >
          <Button {...otherProps}>Stripe</Button>
        </StripeCheckout>
      ) : (
        "shakib"
      )}
    </>
  );
};

export default StripePayment;
