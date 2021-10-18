import client from "./client";
import endpoint from "../../config/endpoints";

const getAllProductByLimit = (limit = 12, start = 4) =>
  client.get(endpoint.allProducts + `?limit=${limit}&start=${start}`);
const getMoreProducts = (start = 4, limit = 12) =>
  client.get(endpoint.allProducts + `?start=${start}&limit=${limit}`);
const getQueryProducts = (keyword) =>
  client.get(endpoint.allProducts + `?keyword=${keyword}`);
const getProductById = (id) => client.get(endpoint.productById + `/${id}`);
const getProductByCategory = (category) =>
  client.get(endpoint.allProducts + `?category=${category}`);
// client.get(endpoint.allProducts + `?category=${category}&limit=${limit}`);
const getMoreProductByCategory = (category, start, limit) =>
  client.get(
    endpoint.allProducts + `?category=${category}&start=${start}&limit=${limit}`
  );
const getProductsPriceRange = (lowPrice, highPrice) =>
  client.get(
    endpoint.allProducts + `?lowPrice=${lowPrice}&highPrice=${highPrice}`
  );

const getProductsByColor = (black, white) =>
  client.get(endpoint.allProducts + `?black=${black}&white=${white}`);

const getProductsByGender = (men, women, kid) =>
  client.get(endpoint.allProducts + `?men=${men}&women=${women}&kid=${kid}`);

const createProductReview = (id, formData, token) =>
  client.post(`${endpoint.allProducts}/${id}/reviews`, formData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

const getAllQueries = (
  black,
  white,
  men,
  women,
  kid,
  frame,
  basic,
  standard,
  premium,
  blue,
  halfFrame,
  fullFrame,
  rimless,
  round,
  retroSquare,
  clubMaster,
  oval,
  rectangle,
  catEye,
  shopEconomy,
  shopPremium
) =>
  client.get(
    endpoint.allProducts +
      `?black=${black}&white=${white}&men=${men}&women=${women}&kid=${kid}&frame=${frame}&basic=${basic}&standard=${standard}&premium=${premium}&blue=${blue}&halfFrame=${halfFrame}&fullFrame=${fullFrame}&rimless=${rimless}&round=${round}&retroSquare=${retroSquare}&clubMaster=${clubMaster}&oval=${oval}&rectangle=${rectangle}&catEye=${catEye}&shopEconomy=${shopEconomy}&shopPremium=${shopPremium}`
  );

const getProductCount = () => client.get(endpoint.count);

export default {
  getAllProductByLimit,
  getProductById,
  getProductByCategory,
  getQueryProducts,
  getMoreProducts,
  getProductsPriceRange,
  getProductsByColor,
  getProductCount,
  getProductsByGender,
  getAllQueries,
  getMoreProductByCategory,
  createProductReview,
};
