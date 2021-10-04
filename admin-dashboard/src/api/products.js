import client from "./client";
import endpoint from "./endpoints";

const getAllProductByLimit = (limit) =>
  client.get(endpoint.allProducts + `?limit=${limit}`);
// eslint-disable-next-line
export default { getAllProductByLimit };
