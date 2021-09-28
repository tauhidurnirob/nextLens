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

const getProductsByGender = (men, women, kid) =>
  client.get(endpoint.allProducts + `?men=${men}&women=${women}&kid=${kid}`);

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
      `?black=${black}&white=${white}&men=${men}&women=${women}&kid=${kid}&frame=${frame}&basic=${basic}&standard=${standard}&premium=${premium}&blue=${blue}&halfFrame=${halfFrame}&fullFrame=${fullFrame}&rimless=${rimless}
       `
  );

// &round=${round}&retroSquare=${retroSquare}&clubMaster=${clubMaster}
// &oval=${oval}&rectangle=${rectangle}&catEye=${catEye}
// &shopEconomy=${shopEconomy}&shopPremium=${shopPremium}
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
  getProductsByGender,
  getAllQueries,
};
