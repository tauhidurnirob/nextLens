import client from "./client";
import endpoint from "../../config/endpoints";

const getPaypal = () => client.post(endpoint.paypal);
const Paypal = () => client.get(endpoint.paypalClient);

export default {
  getPaypal,
  Paypal,
};
