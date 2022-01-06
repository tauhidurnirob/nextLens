import { create } from "apisauce";

// const apiClient = create({ baseURL: "http://localhost:5000/" });
const apiClient = create({
  baseURL: "https://secure-everglades-15883.herokuapp.com/",
});

export default apiClient;
