import client from "./client";

const endpoint = "/posts";

export const getPosts = () => client.get(endpoint);
