import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getProdCategories } from "../features/prodCategory/prodCategorySlice";
import { Select } from "antd";
import { getColors } from "../features/color/colorSlice";
import "react-widgets/styles.css";
import Dropzone from "react-dropzone";
import { deleteImg, uploadImg } from "../features/upload/uploadSlice";
import {
  createProducts,
  getAProduct,
  resetState,
} from "../features/product/productSlice";
import { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import customerToast from "../components/common/CustomToast";
import { useLocation, useNavigate } from "react-router-dom";

let Schema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required").min(5).max(200),
  price: Yup.number().required("Price is required"),
  brand: Yup.string().required("Brand is required"),
  category: Yup.string().required("Category is required"),
  tags: Yup.string().required("Tag is required"),
  color: Yup.array()
    .min(1, "Pick at least one color")
    .required("Color is required"),
  quantity: Yup.number().min(1).max(10).required("Quantity is required"),
});

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const location = useLocation();
  const getProductId = location.pathname.split("/")[3];

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getProdCategories());
    dispatch(getColors());
  }, []);

  const newProduct = useSelector((state) => state.product);
  const {
    isSuccess,
    isError,
    isLoading,
    createdProduct,
    updatedProduct,
    productName,
    productDescription,
    productPrice,
    productBrand,
    productCategory,
    prodTags,
    productColor,
    productQuantity,
    productImages,
  } = newProduct;
  const brandState = useSelector((state) => state.brand.brands);
  const categoryState = useSelector(
    (state) => state.prodCategory.prodCategories
  );
  const colorState = useSelector((state) => state.color.colors);
  const coloropt = [];
  colorState.forEach((i) => {
    coloropt.push({
      label: i.title,
      value: i._id,
    });
  });
  const imgState = useSelector((state) => state.upload.images);

  useEffect(() => {
    if (isSuccess && createdProduct) {
      customerToast("Product created successfully", "success");
    }
    if (isSuccess && updatedProduct) {
      customerToast("Product updated successfully", "success", true);
      navigate("/admin/product-list");
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
    if (getProductId !== undefined) {
      dispatch(getAProduct(getProductId));
      img.push(productImages);
      color.push(productColor);
    } else {
      dispatch(resetState());
    }
  }, [getProductId]);

  useEffect(() => {
    formik.values.color = color ? color : "";
    formik.values.images = img;
  }, [productImages, productColor]);

  const formik = useFormik({
    initialValues: {
      title: productName || "",
      description: productDescription || "",
      price: productPrice || "",
      brand: productBrand || "",
      category: productCategory || "",
      tags: prodTags || "",
      color: productColor || "",
      quantity: productQuantity || "",
      images: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (Object.keys(formik.errors).length === 0) {
        dispatch(createProducts(values));
        customerToast("Product Added Successfully", "success");
        formik.resetForm();
        setTimeout(() => {
          navigate("/admin/product-list");
        }, 3000);
      } else {
        customerToast("Product Not Added", "error");
      }
    },
  });

  const errorStyle = {
    marginTop: "5px",
    marginBottom: "15px",
  };

  const handleColors = (i) => {
    setColor(i);
  };

  return (
    <div>
      <h3 className="mb-4 title">
        {getProductId !== undefined ? "Edit" : "Add"} Product
      </h3>
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
                <option key={j} value={i.title}>
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
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            id=""
          >
            <option value="">Select Category</option>
            {categoryState.map((i, j) => {
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
          <select
            className="form-control form-select py-3"
            name="tags"
            onChange={formik.handleChange("tags")}
            onBlur={formik.handleBlur("tags")}
            value={formik.values.tags}
            id=""
          >
            <option value="" disabled>
              Select Tags
            </option>
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="special">Special</option>
          </select>
          <div className="error" style={errorStyle}>
            {formik.touched.tags && formik.errors.tags}
          </div>
          <Select
            mode="multiple"
            allowClear
            className="w-100"
            placeholder="Select Color"
            defaultValue={color}
            onChange={(i) => handleColors(i)}
            options={coloropt}
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
          <div className="showImages d-flex mt-3 flex-wrap gap-3">
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
            className="btn btn-success border-0 rounded-3 my-5 px-4 fw-bold"
            type="submit"
          >
            {getProductId !== undefined ? "Update" : "Add"} Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
