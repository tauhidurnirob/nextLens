import client from "./client";
import endpoint from "../../config/endpoints";

const getAllProduct = () => client.get(endpoint.allProducts)


export default { getAllProduct };
