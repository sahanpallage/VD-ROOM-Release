import axios from "axios";
import { base_url } from "../../utils/base_url.js";
import { config } from "../../utils/axiosConfig.js";

const getProdCategories = async () => {
  const response = await axios.get(`${base_url}category/`);
  return response.data;
};

const createProdCategory = async (category) => {
  const response = await axios.post(`${base_url}category/`, category, config);
  return response.data;
};

const prodCategoryService = {
  getProdCategories,
  createProdCategory,
};

export default prodCategoryService;
