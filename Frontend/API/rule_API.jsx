import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
