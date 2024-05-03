import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteABlogCategory,
  getBlogCategories,
  resetState,
} from "../features/blogCategory/blogCategorySlice";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "BCNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "title",
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const BlogCatlist = () => {
  const [open, setOpen] = useState(false);
  const [blogCatId, setBlogCatId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setBlogCatId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogCategories());
  }, []);
  const getBlogCategoryState = useSelector(
    (state) => state.blogCategory.blogCategories
  );
  const data1 = [];
  for (let i = 0; i < getBlogCategoryState.length; i++) {
    data1.push({
      key: i + 1,
      title: getBlogCategoryState[i].title,
      action: (
        <>
          <Link
            className=" fs-5 text-warning"
            to={`/admin/blog-category/${getBlogCategoryState[i]._id}`}
          >
            <TbEdit />
          </Link>
          <button
            className="ms-2 fs-5 text-danger bg-transparent border-0"
            onClick={() => showModal(getBlogCategoryState[i]._id)}
          >
            <RiDeleteBin5Line />
          </button>
        </>
      ),
    });
  }

  const deleteBlogCategory = (e) => {
    dispatch(deleteABlogCategory(e)).then(() => {
      setOpen(false);
      dispatch(getBlogCategories());
    });
  };

  return (
    <div>
      <h3 className="mb-4 title">Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBlogCategory(blogCatId);
        }}
        title="Are you sure you want to delete this blog category?"
      />
    </div>
  );
};

export default BlogCatlist;
