import axios from "axios";

export const BASE_URL = "http://localhost:5000";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
