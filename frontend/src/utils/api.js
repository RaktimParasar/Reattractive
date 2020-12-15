import axios from "axios";

// Generate a unique token
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const url = process.env.REACT_APP_API_SERVER;

const api = axios.create({
  baseURL: `${url}`,
  headers: {
    Accept: "application/json",
    Authorization: token,
  },
});

export default api;
