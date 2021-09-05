import client from "./client";
import endpoint from "../../config/endpoints";

const getAllProduct = () => client.get(endpoint.allProducts);
const getSearchProduct = (keyword) =>
  client.get(endpoint.allProducts + `?keyword=${keyword}`);
const getProductById = (id) => client.get(endpoint.productById + `/${id}`);
const getProductByCategory = (category) =>
  client.get(endpoint.allProducts + `?category=${category}`);
const getProductByPrice = (price) =>
  client.get(endpoint.allProducts + `?price=${price}`);

export default {
  getAllProduct,
  getProductById,
  getProductByCategory,
  getSearchProduct,
  getProductByPrice,
};
