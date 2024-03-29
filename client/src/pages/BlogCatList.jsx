import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBlogCategories } from "../features/blogCategory/blogCategorySlice";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";

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
  const dispatch = useDispatch();
  useEffect(() => {
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
      <h3 className="mb-4 title">Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default BlogCatlist;
