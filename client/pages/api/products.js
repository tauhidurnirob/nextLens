import client from "./client";
import endpoint from "../../config/endpoints";

const getAllProduct = () => client.get(endpoint.allProducts);
const getProductById = (id) => client.get(endpoint.productById + `/${id}`);

export default { getAllProduct, getProductById };
