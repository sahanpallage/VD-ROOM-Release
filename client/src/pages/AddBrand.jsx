import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  createBrand,
  getABrand,
  resetState,
  updateBrand,
} from "../features/brand/brandSlice";
import customerToast from "../components/common/CustomToast";

let Schema = Yup.object({
  title: Yup.string().required("Brand Name is required"),
});

const AddBrand = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getBrandId = location.pathname.split("/")[3];
  const newBrand = useSelector((state) => state.brand);
  const { brandName } = newBrand;
  useEffect(() => {
    if (getBrandId !== undefined) {
      dispatch(getABrand(getBrandId));
    } else {
      dispatch(resetState());
    }
  }, [getBrandId]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (getBrandId !== undefined && Object.keys(formik.errors).length === 0) {
        const data = { id: getBrandId, brandData: values };
        dispatch(updateBrand(data));
        customerToast("Brand Updated Successfully", "success", true);
        setTimeout(() => {
          navigate("/admin/list-brand");
        }, 1000);
      } else if (Object.keys(formik.errors).length === 0) {
        dispatch(createBrand(values));
        customerToast("Brand Added Successfully", "success");
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          navigate("/admin/list-brand");
        }, 1000);
      } else {
        customerToast("Brand Not Added", "error");
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">
        {getBrandId !== undefined ? "Edit" : "Add"} Brand
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            label="Enter A Brand"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
            id="brand"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5 px-4 fw-bold"
            type="submit"
          >
            {getBrandId !== undefined ? "Update" : "Add"} Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
