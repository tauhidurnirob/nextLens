import React from "react";
import { Button } from "@material-ui/core";
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

const CashOnDelivery = ({ ...otherProps }) => {
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector(shippingSelector);
  const { cart } = useSelector(productSelector);

  const makePayment = async () => {
    const body = {
      email: shippingInfo.email,
      shipping: shippingInfo.state,
      address: shippingInfo.address,
      cart,
    };
    const { data, ok } = await paymentApi.createCashOnDelivery(body);
    if (ok) {
      toast.success("Kindly check your Email.");
      dispatch(payOrderAction(data));
      dispatch(resetCartAction());
    }
  };
  return (
    <>
      <ToastContainer />
      <Button {...otherProps} onClick={makePayment}>
        Cash On
      </Button>
    </>
  );
};

export default CashOnDelivery;
