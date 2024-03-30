import axios from "axios";
import { base_url } from "../../utils/base_url.js";

const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const token = userFromLocalStorage ? userFromLocalStorage.token : null;

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
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
