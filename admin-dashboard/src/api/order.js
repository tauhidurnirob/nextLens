import client from "./client";
import endpoint from "./endpoints";

const getAllAdminProduct = () => client.get(endpoint.orders);
const getQueryOrderProducts = (status, payment, orderLimit) =>
  client.get(
    endpoint.orders +
      `?status=${status}&payment=${payment}&orderLimit=${orderLimit}`
  );

// eslint-disable-next-line
export default { getAllAdminProduct, getQueryOrderProducts };
