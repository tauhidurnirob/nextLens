import client from "./client";
import endpoint from "../../config/endpoints";

const getAllProduct = () => client.get(endpoint.allProducts);
const getProductById = (id) => client.get(endpoint.productById + `/${id}`);
// const getProductByCategory = (category) =>
//   client.get(endpoint.productByCategory + `/${category}`);
const getProductByCategory = (category) => console.log(category);

export default { getAllProduct, getProductById, getProductByCategory };
