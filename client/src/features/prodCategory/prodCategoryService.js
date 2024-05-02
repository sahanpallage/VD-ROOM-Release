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

const updateProdCategory = async (category) => {
  const response = await axios.put(
    `${base_url}category/${category.id}`,
    { title: category.categoryData.title },
    config
  );
  return response.data;
};

const getAProdCategory = async (id) => {
  const response = await axios.get(`${base_url}category/${id}`, config);
  return response.data;
};

const prodCategoryService = {
  getProdCategories,
  createProdCategory,
  getAProdCategory,
  updateProdCategory,
};

export default prodCategoryService;
