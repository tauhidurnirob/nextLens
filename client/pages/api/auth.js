import client from "./client";
import endpoint from "../../config/endpoints";

const login = (email, password) => client.post(endpoint.login);

export default { login };
