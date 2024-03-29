import React, { useEffect } from "react";
import { Table } from "antd";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";
import "../index.css";

const columns = [
  {
    title: "PNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },

  {
    title: "Price (LKR)",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Color",
    dataIndex: "color",
    sorter: (a, b) => a.color.length - b.color.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    sorter: (a, b) => a.quantity.length - b.quantity.length,
  },
  {
    title: "Sold",
    dataIndex: "sold",
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const productState = useSelector((state) => state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      title: productState[i].title,
      description: productState[i].description,
      price: `${productState[i].price}`,
      color: productState[i].color.join(", "),
      brand: productState[i].brand,
      quantity: productState[i].quantity,
      sold: productState[i].sold,
      action: (
        <>
          <Link className=" fs-5 text-warning" to="">
            <TbEdit />
          </Link>
          <Link className="ms-2 fs-5 text-danger" to="">
            <RiDeleteBin5Line />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ProductList;
