import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.API_URL,
  withCredentials: true,
});

export default api;
