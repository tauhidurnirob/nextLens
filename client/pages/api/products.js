import client from "./client";
import endpoint from "../../config/endpoints";

const getAllProduct = (limit) =>
  client.get(endpoint.allProducts + `?limit=${limit}`);
const getMoreProducts = (start, limit) =>
  client.get(endpoint.allProducts + `?start=${start}&limit=${limit}`);
const getSearchProduct = (keyword) =>
  client.get(endpoint.allProducts + `?keyword=${keyword}`);
const getProductById = (id) => client.get(endpoint.productById + `/${id}`);
const getProductByCategory = (category) =>
  client.get(endpoint.allProducts + `?category=${category}`);

export default {
  getAllProduct,
  getProductById,
  getProductByCategory,
  getSearchProduct,
  getMoreProducts,
};
