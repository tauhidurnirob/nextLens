import client from "./client";
import endpoint from "../../config/endpoints";

const getPaypal = () => client.get(endpoint.paypal);

export default {
  getPaypal,
};
