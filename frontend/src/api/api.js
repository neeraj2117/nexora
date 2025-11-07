import axios from "axios";

export const BASE_URL = "http://localhost:2000/api";
export const IMAGE_URL = BASE_URL.replace("/api", "");

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default API;
