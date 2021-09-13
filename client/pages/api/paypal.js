import client from "./client";
import endpoint from "../../config/endpoints";

const Paypal = () => client.get(endpoint.paypalClient);

export default {
  Paypal,
};
