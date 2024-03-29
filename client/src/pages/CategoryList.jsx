import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProdCategories } from "../features/prodCategory/prodCategorySlice";
import Link from "antd/es/typography/Link";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";

const columns = [
  {
    title: "PCNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const CategoryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProdCategories());
  }, []);
  const prodCategoryState = useSelector(
    (state) => state.prodCategory.prodCategories
  );
  const data1 = [];
  for (let i = 0; i < prodCategoryState.length; i++) {
    data1.push({
      key: i + 1,
      title: prodCategoryState[i].title,
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
      <h3 className="mb-4 title">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default CategoryList;
