import axios from "axios";
import { base_url } from "../../utils/base_url.js";

const getProdCategories = async () => {
  const response = await axios.get(`${base_url}category/`);
  return response.data;
};

const prodCategoryService = {
  getProdCategories,
};

export default prodCategoryService;
