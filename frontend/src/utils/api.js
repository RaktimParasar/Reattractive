import axios from "axios";

// Generate a unique token
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const api = axios.create({
  baseURL: "/api",
  headers: {
    Accept: "application/json",
    Authorization: token,
  },
});

export default api;
