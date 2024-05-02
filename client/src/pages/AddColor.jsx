import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import customerToast from "../components/common/CustomToast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  createColor,
  getAColor,
  resetState,
  updateColor,
} from "../features/color/colorSlice";

let Schema = Yup.object({
  title: Yup.string().required("Color Name is required"),
});

const AddColor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getColorId = location.pathname.split("/")[3];
  const newColor = useSelector((state) => state.color);
  const { colorName } = newColor;
  useEffect(() => {
    if (getColorId !== undefined) {
      dispatch(getAColor(getColorId));
    } else {
      dispatch(resetState());
    }
  }, [getColorId]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: colorName || "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (getColorId !== undefined && Object.keys(formik.errors).length === 0) {
        const data = { id: getColorId, colorData: values };
        dispatch(updateColor(data));
        customerToast("Color Updated Successfully", "success", true);
        setTimeout(() => {
          navigate("/admin/color-list");
        }, 3000);
      } else if (Object.keys(formik.errors).length === 0) {
        dispatch(createColor(values));
        customerToast("Color Added Successfully", "success");
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          navigate("/admin/color-list");
        }, 3000);
      } else {
        customerToast("Color Not Added", "error");
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">
        {getColorId !== undefined ? "Edit" : "Add"} Color
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            label="Enter A Color"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
            id="color"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5 fw-bold px-4"
            type="submit"
          >
            {getColorId !== undefined ? "Update" : "Add"} Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddColor;
