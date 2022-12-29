import axios from "axios";

const BASE_URL = "https://e-commerce-server-v980.onrender.com/api/";
 
const access = JSON?.parse(localStorage?.getItem("persist:root"))?.user;
let TOKEN = "";
if (access !== undefined) {
  TOKEN = JSON?.parse(access).currentUser?.acccesToken;
}
 
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Anshu ${TOKEN}` },
});
