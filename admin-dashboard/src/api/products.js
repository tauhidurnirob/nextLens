import client from "./client";
import endpoint from "./endpoints";

const getAllProducts = () => client.get(endpoint.allProducts);
// eslint-disable-next-line
export default { getAllProducts };
