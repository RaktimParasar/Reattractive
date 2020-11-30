import axios from 'axios';

// Generate a unique token
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const url = "http://localhost:3001";

const api = axios.create({
    baseURL: `${url}/`,
    headers : {
        'Accept': 'application/json',
        'Authorization': token
    }
})

export default api;