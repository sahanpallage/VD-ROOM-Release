import axios from "axios";
import { base_url } from "../../utils/base_url.js";
import { config } from "../../utils/axiosConfig.js";

const login = async (userData) => {
  console.log(userData);
  const response = await axios.post(
    `${base_url}auth/admin-login`,
    userData,
    config
  );
  if (response.status) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  login,
};

export default authService;
