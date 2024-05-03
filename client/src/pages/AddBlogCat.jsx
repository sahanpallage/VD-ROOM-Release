import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import customerToast from "../components/common/CustomToast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  createBlogCategory,
  getABlogCategory,
  resetState,
  updateBlogCategory,
} from "../features/blogCategory/blogCategorySlice";

let Schema = Yup.object({
  title: Yup.string().required("Blog Category Name is required"),
});

const AddBlogCat = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getBlogCatId = location.pathname.split("/")[3];
  const newBlogCat = useSelector((state) => state.blogCategory);
  const { blogCatName } = newBlogCat;
  useEffect(() => {
    if (getBlogCatId !== undefined) {
      dispatch(getABlogCategory(getBlogCatId));
    } else {
      dispatch(resetState());
    }
  }, [getBlogCatId]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogCatName || "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (
        getBlogCatId !== undefined &&
        Object.keys(formik.errors).length === 0
      ) {
        const data = { id: getBlogCatId, blogCatData: values };
        dispatch(updateBlogCategory(data));
        customerToast("Blog Category Updated Successfully", "success", true);
        setTimeout(() => {
          navigate("/admin/blog-category-list");
        }, 1000);
      } else if (Object.keys(formik.errors).length === 0) {
        dispatch(createBlogCategory(values));
        customerToast("Blog Category Added Successfully", "success");
        formik.resetForm();
        setTimeout(() => {
          navigate("/admin/blog-category-list");
        }, 1000);
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
