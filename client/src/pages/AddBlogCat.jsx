import React from "react";
import CustomInput from "../components/CustomInput";
import customerToast from "../components/common/CustomToast";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createBlogCategory } from "../features/blogCategory/blogCategorySlice";

let Schema = Yup.object({
  title: Yup.string().required("Blog Category Name is required"),
});

const AddBlogCat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (Object.keys(formik.errors).length === 0) {
        dispatch(createBlogCategory(values));
        customerToast("Blog Category Added Successfully", "success");
        formik.resetForm();
        setTimeout(() => {
          navigate("/admin/blog-category-list");
        }, 3000);
      } else {
        customerToast("Blog Category Not Added", "error");
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Blog Category</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            label="Enter Blog Category"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
            id="blogCategory"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Blog Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogCat;
