import axios from "axios";
import { base_url } from "../../utils/base_url.js";
import { config } from "../../utils/axiosConfig.js";

const getOrders = async () => {
  const response = await axios.get(`${base_url}auth/get-allOrders`, config);
  return response.data;
};

const orderService = {
  getOrders,
};

export default orderService;
