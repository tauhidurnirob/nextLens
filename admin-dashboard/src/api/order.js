import client from "./client";
import endpoint from "./endpoints";

const getAllOrdersByLimits = (limit, start = 4) =>
  client.get(endpoint.orders + `?limit=${limit}&start=${start}`);
const getQueryOrderProducts = (status, payment) =>
  client.get(endpoint.orders + `?status=${status}&payment=${payment}`);

// eslint-disable-next-line
export default { getAllOrdersByLimits, getQueryOrderProducts };
