import axios from "axios";
import { base_url } from "../../utils/base_url.js";
import { config } from "../../utils/axiosConfig.js";

const getEnquiries = async () => {
  const response = await axios.get(`${base_url}enquiry/`);
  return response.data;
};

const deleteEnquiry = async (id) => {
  const response = await axios.delete(`${base_url}enquiry/${id}`, config);
  return response.data;
};

const getEnquiry = async (id) => {
  const response = await axios.get(`${base_url}enquiry/${id}`);
  return response.data;
};

const updateEnquiry = async (enquiry) => {
  const response = await axios.put(
    `${base_url}enquiry/${enquiry.id}`,
    { status: enquiry.enqData },
    config
  );
  return response.data;
};

const enquiryService = {
  getEnquiries,
  deleteEnquiry,
  getEnquiry,
  updateEnquiry,
};

export default enquiryService;
