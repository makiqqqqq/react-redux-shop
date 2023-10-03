import axios from "axios";

const baseURL = "https://api.escuelajs.co/api/v1";

export const client = axios.create({
  baseURL,
});
