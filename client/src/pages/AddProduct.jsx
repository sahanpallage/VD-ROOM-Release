import React from "react";
import CustomInput from "../components/CustomInput";

const AddProduct = () => {
  return (
    <div>
      <h3 className="mb-4">Add Product</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter A Product" />
          <button
            className="btn btn-success border-0 rounded-3 my-5"
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
