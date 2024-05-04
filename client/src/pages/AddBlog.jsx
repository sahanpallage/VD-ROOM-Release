import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../index.css";
import { Stepper } from "react-form-stepper";
import {
  deleteImg,
  resetImage,
  uploadImg,
} from "../features/upload/uploadSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import customerToast from "../components/common/CustomToast";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Dropzone from "react-dropzone";
import {
  createBlog,
  getABlog,
  resetState,
  updateBlog,
} from "../features/blog/blogSlice";
import { getBlogCategories } from "../features/blogCategory/blogCategorySlice";

let Schema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required").min(5).max(200),
  category: Yup.string().required("Category is required"),
});

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[3];

  const imgState = useSelector((state) => state.upload.images);
  const blogCatState = useSelector(
    (state) => state.blogCategory.blogCategories
  );
  const newBlog = useSelector((state) => state.blog);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBlog,
    updatedBlog,
    blogName,
    blogDescription,
    blogCategory,
    blogImage,
  } = newBlog;

  useEffect(() => {
    if (getBlogId !== undefined) {
      dispatch(getABlog(getBlogId));
      img.push(blogImage);
    } else {
      dispatch(resetState());
    }
  }, [getBlogId]);

  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogCategories());
  }, []);

  useEffect(() => {
    if (isSuccess && createdBlog) {
      customerToast("Blog created successfully", "success");
    }
    if (isSuccess && updatedBlog) {
      customerToast("Blog updated successfully", "success", true);
      navigate("/admin/blog-list");
    }
    if (isError) {
      customerToast("Something went wrong", "error");
    }
  }, [isSuccess, isError, isLoading]);

  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  useEffect(() => {
    formik.values.images = img;
  }, [blogImage]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogName || "",
      description: blogDescription || "",
      category: blogCategory || "",
      images: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (getBlogId !== undefined) {
        const data = { id: getBlogId, blogData: values };
        dispatch(updateBlog(data));
        dispatch(resetState());
      } else {
        dispatch(createBlog(values));
        formik.resetForm();
        setTimeout(() => {
          navigate("/admin/blog-list");
        }, 1000);
      }
    },
  });

  const errorStyle = {
    marginTop: "5px",
    marginBottom: "15px",
  };

  return (
    <div>
      <h3 className="mb-4 title">
        {getBlogId !== undefined ? "Edit" : "Add"} Blog
      </h3>
      <Stepper
        steps={[
          { label: "Add Blog Details" },
          { label: "Upload Images" },
          { label: "Finish" },
        ]}
        activeStep={1}
      />
      <div className="">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mt-4">
            <CustomInput
              type="text"
              label="Enter Blog Title"
              name="title"
              onCh={formik.handleChange}
              onBl={formik.handleBlur}
              val={formik.values.title}
            />
          </div>
          <div className="error" style={errorStyle}>
            {formik.touched.title && formik.errors.title}
          </div>
          <select
            className="form-control py-3"
            id=""
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          >
            <option value="">Select Blog Category</option>
            {blogCatState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error" style={errorStyle}>
            {formik.touched.category && formik.errors.category}
          </div>
          <ReactQuill
            className="mt-3"
            theme="snow"
            name="description"
            onChange={(newValue) => {
              if (newValue !== formik.values.description) {
                formik.setFieldValue("description", newValue);
              }
            }}
            value={formik.values.description}
          />
          <div className="error" style={errorStyle}>
            {formik.touched.description && formik.errors.description}
          </div>
          <div className="bg-white border-1 p-5 text-center mt-4">
            <Dropzone
              className="drop-zone"
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} style={{ cursor: "pointer" }}>
                    <input {...getInputProps()} />
                    <p>
                      Drag and drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showImages d-flex mt-3 flex-wrap mt-3 gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className="position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5 fw-bold px-3"
            type="submit"
          >
            {getBlogId !== undefined ? "Update" : "Add"} Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
