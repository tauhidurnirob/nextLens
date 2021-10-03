import React from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import { payOrderAction } from "../redux/slices/paySlice";
import { resetCartAction, productSelector } from "../redux/slices/productSlice";
import { shippingSelector } from "./../redux/slices/shippingSlice";
import paymentApi from "../../pages/api/payments";

const PayPalPayment = () => {
  const dispatch = useDispatch();

  const { shippingInfo } = useSelector(shippingSelector);
  const { cart } = useSelector(productSelector);

  const totalAmount = cart
    .map((item) => item.totalPrice)
    .reduce((acc, cc) => acc + cc, 0);

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
              full_name: shippingInfo?.name?.split(" ")[0],
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

  const onApprove = async (data, actions) => {
    const paymentResult = actions.order.capture();
    if (paymentResult) {
      const body = {
        title: "PAID",
        text: "Thanks for Paying via PayPal",
        name: shippingInfo.name,
        email: shippingInfo.email,
        shipping: shippingInfo.state,
        address: shippingInfo.address,
        cart,
      };
      await paymentApi.createInvoice(body);
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
          "client-id": process.env.NEXT_PUBLIC_CLIENT_ID,
        }}
      >
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
      </PayPalScriptProvider>
    </>
  );
};

export default PayPalPayment;
