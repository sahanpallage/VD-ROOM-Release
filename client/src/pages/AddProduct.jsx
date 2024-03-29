import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getProdCategories } from "../features/prodCategory/prodCategorySlice";
import Multiselect from "react-widgets/Multiselect";
import { getColors } from "../features/color/colorSlice";
import "react-widgets/styles.css";
import Dropzone from "react-dropzone";
import { uploadImg } from "../features/upload/uploadSlice";

let Schema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required"),
  brand: Yup.string().required("Brand is required"),
  category: Yup.string().required("Category is required"),
  color: Yup.array().required("Color is required"),
  quantity: Yup.number().required("Quantity is required"),
});

const AddProduct = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState([]);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getProdCategories());
    dispatch(getColors());
  }, []);

  const brandState = useSelector((state) => state.brand.brands);
  const categoryState = useSelector(
    (state) => state.prodCategory.prodCategories
  );
  const colorState = useSelector((state) => state.color.colors);
  const colors = [];
  colorState.forEach((i) => {
    colors.push({ _id: i._id, color: i.title });
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      color: [],
      quantity: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  useEffect(() => {
    formik.setFieldValue("color", color);
  }, [color]);

  const errorStyle = {
    marginTop: "5px",
    marginBottom: "15px",
  };

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div className="d-flex flex-column mb-4">
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter A Product Title"
            name="title"
            onCh={formik.handleChange}
            onBl={formik.handleBlur}
            val={formik.values.title}
          />
          <div className="error" style={errorStyle}>
            {formik.touched.title && formik.errors.title}
          </div>
          <div className="mb-3">
            <ReactQuill
              placeholder="Enter A Product Description"
              theme="snow"
              value={formik.values.description}
              onChange={(content, delta, source, editor) => {
                formik.setFieldValue("description", content);
              }}
              onBlur={() => formik.setFieldTouched("description")}
            />
            <div className="error" style={errorStyle}>
              {formik.touched.description && formik.errors.description}
            </div>
          </div>
          <div className="mt-3">
            <CustomInput
              type="number"
              name="price"
              label="Enter A Product Price"
              onCh={formik.handleChange}
              onBl={formik.handleBlur}
              val={formik.values.price}
            />
            <div className="error" style={errorStyle}>
              {formik.touched.price && formik.errors.price}
            </div>
          </div>
          <select
            name="brand"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brand}
            className="form-control form-select py-3"
            id=""
          >
            <option value="">Select Brand</option>
            {brandState.map((i, j) => {
              return (
                <option key={(i, j)} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error" style={errorStyle}>
            {formik.touched.brand && formik.errors.brand}
          </div>
          <select
            className="form-control form-select py-3"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            id=""
          >
            <option value="">Select Category</option>
            {categoryState.map((i, j) => {
              return (
                <option key={(i, j)} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error" style={errorStyle}>
            {formik.touched.category && formik.errors.category}
          </div>
          <Multiselect
            placeholder="Select Colors"
            dataKey="id"
            name="color"
            textField="color"
            data={colors}
            onChange={(e) => setColor(e)}
          />
          <div className="error" style={errorStyle}>
            {formik.touched.color && formik.errors.color}
          </div>
          <CustomInput
            type="number"
            label="Enter Product Quantity"
            name="quantity"
            onCh={formik.handleChange}
            onBl={formik.handleBlur}
            val={formik.values.quantity}
          />
          <div className="error" style={errorStyle}>
            {formik.touched.quantity && formik.errors.quantity}
          </div>
          <div className="bg-white border-1 p-5 text-center">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag and drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-3"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
