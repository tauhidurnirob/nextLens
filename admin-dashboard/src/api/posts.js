import client from "./client";
import endpoint from "./endpoints";

const postsProduct = (formData) =>
  client.post("/api/upload", { image: formData.image[0] });
// const postsProduct = (formData) => client.post(endpoint.post, formData);

// eslint-disable-next-line
export default { postsProduct };
