import axios from "axios";
import { base_url } from "../../utils/base_url.js";

const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
    Accept: "application/json",
  },
};
const getOrders = async () => {
  const response = await axios.get(`${base_url}auth/get-allOrders`, config);
  return response.data;
};

const orderService = {
  getOrders,
};

export default orderService;
