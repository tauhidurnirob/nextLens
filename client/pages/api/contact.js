import client from "./client";
import endpoint from "../../config/endpoints";

const postContact = (contactData) => client.post(endpoint.contact, contactData);

export default {
  postContact,
};
