import axios from "axios";

const api = axios.create({
  baseURL: "https://apicrash.onrender.com",
  //baseURL: "https://localhost:4000",
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
