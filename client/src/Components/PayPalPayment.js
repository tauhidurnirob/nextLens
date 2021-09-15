import React, { useState } from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import paypalApi from "../../pages/api/paypal";
import { payOrderAction } from "../redux/slices/paySlice";
import { resetCartAction, productSelector } from "../redux/slices/productSlice";
import { shippingSelector } from "./../redux/slices/shippingSlice";

const PayPalPayment = () => {
  const dispatch = useDispatch();

  const [clientID, setClientId] = useState("");

  const { shippingInfo } = useSelector(shippingSelector);
  const { cart } = useSelector(productSelector);

  const totalAmount = cart
    .map((item) => item.totalPrice)
    .reduce((acc, cc) => acc + cc, 0);

  const addPayPalScript = async () => {
    const { data, ok } = await paypalApi.Paypal();
    if (ok) {
      setClientId(data);
    }
  };
  addPayPalScript();

  const createOrder = (data, actions) => {
    return actions.order.create({
      application_context: {
        shipping_preferences: "SET_PROVIDED_ADDRESS",
      },
      purchase_units: [
        {
          amount: {
            value: totalAmount,
          },
          shipping: {
            name: {
              full_name: shippingInfo?.name,
            },
            address: {
              address_line_1: shippingInfo?.address,
              address_line_2: shippingInfo?.state.stateName,
              admin_area_2: shippingInfo?.state.city,
              admin_area_1: shippingInfo?.state.shortName,
              postal_code: shippingInfo?.state.postalCode,
              country_code: "US",
            },
          },
        },
      ],
      intent: "CAPTURE",
    });
  };

  const onApprove = (data, actions) => {
    const paymentResult = actions.order.capture();
    if (paymentResult) {
      toast.success("Thanks for purchasing");
      dispatch(payOrderAction(paymentResult));
      dispatch(resetCartAction());
    }
  };

  return (
    <>
      <ToastContainer />
      <PayPalScriptProvider
        options={{
          "client-id": clientID,
        }}
      >
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
      </PayPalScriptProvider>
    </>
  );
};

export default PayPalPayment;
