import axios from "axios";
import { base_url } from "../../utils/base_url.js";
import { config } from "../../utils/axiosConfig.js";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/`);
  return response.data;
};

const createBlog = async (blogData) => {
  const response = await axios.post(`${base_url}blog/create`, blogData, config);
  return response.data;
};

const blogService = {
  getBlogs,
  createBlog,
};

export default blogService;
