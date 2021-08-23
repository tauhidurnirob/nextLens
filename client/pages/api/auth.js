import client from "./client";
import endpoint from "../../config/endpoints";

const loginAuth = (email, password) =>
  client.post(endpoint.login, { email, password });

const registerAuth = (name, email, password) =>
  client.post(endpoint.register, { name, email, password });

export default { loginAuth, registerAuth };
