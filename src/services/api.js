import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-0z6k.onrender.com",
});
