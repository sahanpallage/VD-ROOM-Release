import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAProdCategory,
  getProdCategories,
  resetState,
} from "../features/prodCategory/prodCategorySlice";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";

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
  const [open, setOpen] = useState(false);
  const [prodCatId, setProdCatId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setProdCatId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
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
          <Link
            className=" fs-5 text-warning"
            to={`/admin/category/${prodCategoryState[i]._id}`}
          >
            <TbEdit />
          </Link>
          <Link
            className="ms-2 fs-5 text-danger bg-transparent border-0"
            onClick={() => showModal(prodCategoryState[i]._id)}
          >
            <RiDeleteBin5Line />
          </Link>
        </>
      ),
    });
  }
  const deleteProdCategory = (e) => {
    dispatch(deleteAProdCategory(e)).then(() => {
      setOpen(false);
      dispatch(getProdCategories());
    });
  };
  return (
    <div>
      <h3 className="mb-4 title">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteProdCategory(prodCatId);
        }}
        title="Are you sure you want to delete this brand?"
      />
    </div>
  );
};

export default CategoryList;
