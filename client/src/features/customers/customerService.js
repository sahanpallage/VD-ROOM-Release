import axios from "axios";
import { base_url } from "../../utils/base_url.js";

const getUsers = async () => {
  const response = await axios.get(`${base_url}auth/all-users`);
  return response.data;
};

const customerService = {
  getUsers,
};

export default customerService;
