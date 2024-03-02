import axios from "axios";

export const axiosBase = axios.create({
  // baseURL: "http://localhost:5500/api",
  // baseURL: "https://evangadi-forum-2024-deploy-4.onrender.com/api",
});

export default axiosBase;
