import axios from "axios";
import { base_url } from "../../utils/base_url.js";
import { config } from "../../utils/axiosConfig.js";

const getCoupons = async () => {
  const response = await axios.get(`${base_url}coupon/`, config);
  return response.data;
};

const createCoupon = async (coupon) => {
  const response = await axios.post(`${base_url}coupon/create`, coupon, config);
  return response.data;
};

const updateCoupon = async (coupon) => {
  const response = await axios.put(
    `${base_url}coupon/${coupon.id}`,
    {
      name: coupon.couponData.name,
      discount: coupon.couponData.discount,
      expiry: coupon.couponData.expiry,
    },
    config
  );
  return response.data;
};

const getACoupon = async (id) => {
  const response = await axios.get(`${base_url}coupon/${id}`, config);
  return response.data;
};

const deleteCoupon = async (id) => {
  const response = await axios.delete(`${base_url}coupon/${id}`, config);
  return response.data;
};

const couponService = {
  getCoupons,
  createCoupon,
  getACoupon,
  updateCoupon,
  deleteCoupon,
};

export default couponService;
