import client from "./client";
import endpoint from "../../config/endpoints";

const getAllProductByLimit = (limit) =>
  client.get(endpoint.allProducts + `?limit=${limit}`);
const getMoreProducts = (start, limit) =>
  client.get(endpoint.allProducts + `?start=${start}&limit=${limit}`);
const getSearchProduct = (keyword) =>
  client.get(endpoint.allProducts + `?keyword=${keyword}`);
const getProductById = (id) => client.get(endpoint.productById + `/${id}`);
const getProductByCategory = (category) =>
  client.get(endpoint.allProducts + `?category=${category}`);
const getProductsPriceRange = (lowPrice, highPrice) =>
  client.get(
    endpoint.allProducts + `?lowPrice=${lowPrice}&highPrice=${highPrice}`
  );

const getProductsByColor = (black, white) =>
  client.get(endpoint.allProducts + `?black=${black}&white=${white}`);

const getProductCount = () => client.get(endpoint.count);

export default {
  getAllProductByLimit,
  getProductById,
  getProductByCategory,
  getSearchProduct,
  getMoreProducts,
  getProductsPriceRange,
  getProductsByColor,
  getProductCount,
};
