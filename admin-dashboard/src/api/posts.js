import client from "./client";
import endpoint from "./endpoints";

// const postsProduct = (formData) => client.post(endpoint.post, formData);
const postsProduct = (formData) => client.post(endpoint.post, formData);
const imageUpload = (imageData) =>
  client.post(endpoint.upload, imageData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// eslint-disable-next-line
export default { postsProduct, imageUpload };
