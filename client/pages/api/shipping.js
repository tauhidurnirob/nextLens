import client from "./client";
import endpoint from "../../config/endpoints";

const postShipping = (shippingData) =>
  client.post(endpoint.shipping, shippingData);

export default {
  postShipping,
};
