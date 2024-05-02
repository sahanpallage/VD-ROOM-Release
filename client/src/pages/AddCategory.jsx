import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import customerToast from "../components/common/CustomToast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  createProdCategory,
  getAProdCategory,
  resetState,
  updateProdCategory,
} from "../features/prodCategory/prodCategorySlice";

let Schema = Yup.object({
  title: Yup.string().required("Category Name is required"),
});

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getProdCatId = location.pathname.split("/")[3];
  const newProdCat = useSelector((state) => state.prodCategory);
  const { prodCatName } = newProdCat;
  useEffect(() => {
    if (getProdCatId !== undefined) {
      dispatch(getAProdCategory(getProdCatId));
    } else {
      dispatch(resetState());
    }
  }, [getProdCatId]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: prodCatName || "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (
        getProdCatId !== undefined &&
        Object.keys(formik.errors).length === 0
      ) {
        const data = { id: getProdCatId, categoryData: values };
        dispatch(updateProdCategory(data));
        customerToast("Product Category Updated Successfully", "success", true);
        setTimeout(() => {
          navigate("/admin/list-category");
        }, 3000);
      } else if (Object.keys(formik.errors).length === 0) {
        dispatch(createProdCategory(values));
        customerToast("Product Category Added Successfully", "success");
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          navigate("/admin/list-category");
        }, 3000);
      } else {
        customerToast("Product Category Not Added", "error");
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">
        {getProdCatId !== undefined ? "Edit" : "Add"} Category
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            label="Enter A Product Category"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
            id="product"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5 px-4 fw-bold"
            type="submit"
          >
            {getProdCatId !== undefined ? "Update" : "Add"} Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
