import client from "./client";
import endpoint from "./endpoints";

const getAllProductByLimit = (limit, start = 4) =>
  client.get(endpoint.allProducts + `?limit=${limit}&start=${start}`);
const getSearchProduct = (adminKeyword, adminCategory) =>
  client.get(
    endpoint.allProducts +
      `?adminKeyword=${adminKeyword}&adminCategory=${adminCategory}`
  );

// eslint-disable-next-line
export default { getAllProductByLimit, getSearchProduct };
