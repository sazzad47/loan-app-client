import axios from "axios";

export const API_URL = "https://loan-app-server-px1u.onrender.com";
// export const API_URL = "http://client1.jewelercart.com:4000";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: API_URL,
});

export default api;
