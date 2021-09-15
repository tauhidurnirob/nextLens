import client from "./client";
import endpoint from "../../config/endpoints";

const createPaymentStripe = (body) => client.post(endpoint.stripeClient, body);

export default {
  createPaymentStripe,
};
