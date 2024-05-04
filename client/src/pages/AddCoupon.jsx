import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import customerToast from "../components/common/CustomToast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  createCoupon,
  getACoupon,
  resetState,
  updateCoupon,
} from "../features/coupon/couponSlice";

let Schema = Yup.object({
  name: Yup.string().required("Coupon Name is required"),
  expiry: Yup.date().required("Expiry Date is required"),
  discount: Yup.number().required("Discount Amount is required"),
});

const AddCoupon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getCouponId = location.pathname.split("/")[3];
  const newCoupon = useSelector((state) => state.coupon);
  const { couponName, couponExpiry, couponDiscount } = newCoupon;
  const changeDateFormat = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JavaScript
    const day = String(newDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    if (getCouponId !== undefined) {
      dispatch(getACoupon(getCouponId));
    } else {
      dispatch(resetState());
    }
  }, [getCouponId]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: couponName || "",
      expiry: changeDateFormat(couponExpiry) || "",
      discount: couponDiscount || 0,
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (
        getCouponId !== undefined &&
        Object.keys(formik.errors).length === 0
      ) {
        const data = { id: getCouponId, couponData: values };
        dispatch(updateCoupon(data));
        customerToast("Coupon Updated Successfully", "success", true);
        setTimeout(() => {
          navigate("/admin/coupon-list");
        }, 1000);
      } else if (Object.keys(formik.errors).length === 0) {
        dispatch(createCoupon(values));
        customerToast("Coupon Added Successfully", "success");
        formik.resetForm();
        setTimeout(() => {
          navigate("/admin/coupon-list");
        }, 1000);
      } else {
        customerToast("Coupon Not Added", "error");
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">
        {getCouponId !== undefined ? "Edit" : "Add"} Coupon
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="name"
            label="Enter Coupon Name"
            onCh={formik.handleChange("name")}
            onBl={formik.handleBlur("name")}
            val={formik.values.name}
            id="name"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <CustomInput
            type="date"
            name="expiry"
            label="Select Expiry Date"
            onCh={formik.handleChange("expiry")}
            onBl={formik.handleBlur("expiry")}
            val={formik.values.expiry}
            id="coupon"
          />
          <div className="error">
            {formik.touched.expiry && formik.errors.expiry}
          </div>
          <CustomInput
            type="number"
            name="discount"
            label="Enter Discount Amount"
            onCh={formik.handleChange("discount")}
            onBl={formik.handleBlur("discount")}
            val={formik.values.discount}
            id="discount"
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getCouponId !== undefined ? "Update" : "Add"} Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
