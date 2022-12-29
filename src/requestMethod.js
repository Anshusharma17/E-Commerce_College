import axios from "axios";

const BASE_URL = "https://e-commerce-server-v980.onrender.com/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser?.acccesToken;
 
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Anshu ${TOKEN}` },
});
