import React from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createBrand } from "../features/brand/brandSlice";
import customerToast from "../components/common/CustomToast";

let Schema = Yup.object({
  title: Yup.string().required("Brand Name is required"),
});

const AddBrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (Object.keys(formik.errors).length === 0) {
        dispatch(createBrand(values));
        customerToast("Brand Added Successfully", "success");
        formik.resetForm();
        setTimeout(() => {
          navigate("/admin/list-brand");
        }, 3000);
      } else {
        customerToast("Brand Not Added", "error");
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Brand</h3>
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
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
