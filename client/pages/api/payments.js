import client from "./client";
import endpoint from "../../config/endpoints";

const createPaymentStripe = (body) => client.post(endpoint.stripeClient, body);
const createInvoice = (body) =>
  client.post(endpoint.cashOnDelivery, body);

export default {
  createPaymentStripe,
  createInvoice,
};
