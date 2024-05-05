import axios from "axios";
import { base_url } from "../../utils/base_url.js";
import { config } from "../../utils/axiosConfig.js";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);
  return response.data;
};

const createProducts = async (productData) => {
  const response = await axios.post(
    `${base_url}product/create`,
    productData,
    config
  );
  return response.data;
};

const productService = {
  getProducts,
  createProducts,
};

export default productService;
import axios from "axios";
import { base_url } from "../../utils/base_url.js";
import { config } from "../../utils/axiosConfig.js";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);
  return response.data;
};

const createProducts = async (productData) => {
  const response = await axios.post(
    `${base_url}product/create`,
    productData,
    config()
  );
  return response.data;
};

const deleteProduct = async (productId) => {
  const res = await axios.delete(`${base_url}product/delete/${productId}`, config());
  if (!res.ok) throw new Error("Failed to delete product");
  return res.status;
};

const productService = {
  getProducts,
  createProducts,
  deleteProduct,
};

export default productService;
