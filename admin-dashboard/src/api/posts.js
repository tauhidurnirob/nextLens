import client from "./client";
import endpoint from "./endpoints";

// const postsProduct = (formData) => client.post(endpoint.post, formData);
const postsProduct = (formData) => client.post(endpoint.post, formData);

// eslint-disable-next-line
export default { postsProduct };
