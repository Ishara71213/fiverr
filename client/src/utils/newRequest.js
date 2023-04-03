import axios from "axios";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const token = currentUser?.tokenAuth;

const newRequest = axios.create({
  baseURL: "https://fiverr-testapi.onrender.com/api/",
  // baseURL: "http://localhost:8800/api/",
  headers: { Authorization: `${token}` },
  withCredentials: true,
});

export default newRequest;
