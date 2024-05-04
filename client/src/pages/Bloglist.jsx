import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteABlog, getBlogs, resetState } from "../features/blog/blogSlice";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "BNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Views",
    dataIndex: "numViews",
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const Bloglist = () => {
  const [open, setOpen] = useState(false);
  const [blogId, setBlogId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setBlogId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogs());
  }, []);
  const getblogState = useSelector((state) => state.blog.blogs);
  const data1 = [];
  for (let i = 0; i < getblogState.length; i++) {
    data1.push({
      key: i + 1,
      title: getblogState[i].title,
      description: getblogState[i].description,
      category: getblogState[i].category,
      numViews: getblogState[i].numViews,
      action: (
        <>
          <Link
            className=" fs-5 text-warning"
            to={`/admin/blog/${getblogState[i]._id}`}
          >
            <TbEdit />
          </Link>
          <button
            className="ms-2 fs-5 text-danger bg-transparent border-0"
            onClick={() => showModal(getblogState[i]._id)}
          >
            <RiDeleteBin5Line />
          </button>
        </>
      ),
    });
  }
  const deleteBlog = (e) => {
    dispatch(deleteABlog(e)).then(() => {
      setOpen(false);
      dispatch(getBlogs());
    });
  };
  return (
    <div>
      <h3 className="mb-4 title">Blog List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBlog(blogId);
        }}
        title="Are you sure you want to delete this blog?"
      />
    </div>
  );
};

export default Bloglist;
