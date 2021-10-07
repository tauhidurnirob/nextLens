import client from "./client";
import endpoint from "./endpoints";

const getAllOrders = () => client.get(endpoint.orders);

// eslint-disable-next-line
export default { getAllOrders };
