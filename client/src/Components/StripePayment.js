import React from "react";
import { Button } from "@material-ui/core";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import paymentApi from "../../pages/api/payments";
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
    const { data, ok } = await paymentApi.createPaymentStripe(body);
    if (ok) {
      const body = {
        title: "PAID",
        text: "Thanks for Paying via Stripe",
        name: shippingInfo.name,
        email: shippingInfo.email,
        shipping: shippingInfo.state,
        address: shippingInfo.address,
        cart,
      };
      await paymentApi.createInvoice(body);
      toast.success("Thanks for purchasing");
      dispatch(payOrderAction(data));
      dispatch(resetCartAction());
    }
  };
  return (
    <>
      <ToastContainer />
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
    </>
  );
};

export default StripePayment;
