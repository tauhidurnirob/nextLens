import client from "./client";
import endpoint from "./endpoints";

const getUsers = () => client.get(endpoint.users);

// eslint-disable-next-line
export default { getUsers };
