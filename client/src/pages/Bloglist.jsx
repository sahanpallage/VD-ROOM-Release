import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blog/blogSlice";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";

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
    title: "Likes",
    dataIndex: "likes",
  },
  {
    title: "Dislikes",
    dataIndex: "dislikes",
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const Bloglist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
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
      likes: getblogState[i].likes,
      dislikes: getblogState[i].dislikes,
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
      <h3 className="mb-4 title">Blog List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Bloglist;
