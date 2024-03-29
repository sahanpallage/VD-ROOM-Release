import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEnquiries } from "../features/enquiry/enquirySlice";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import "../index.css";

const columns = [
  {
    title: "ENo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Comment",
    dataIndex: "comment",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Enquiries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnquiries());
  }, []);
  const getEnquiryState = useSelector((state) => state.enquiry.enquiries);
  const data1 = [];
  for (let i = 0; i < getEnquiryState.length; i++) {
    data1.push({
      key: i + 1,
      name: getEnquiryState[i].name,
      email: getEnquiryState[i].email,
      phone: getEnquiryState[i].phone,
      comment: getEnquiryState[i].comment,
      date: new Date(getEnquiryState[i].createdAt).toLocaleDateString(),
      status: (
        <>
          <select name="" className="form-control form-select" id="">
            <option value="setStatus">Set Status</option>
            <option value="Pending">Pending</option>
            <option value="Resolved">Resolved</option>
            <option value="inProgress">In Progress</option>
          </select>
        </>
      ),
      action: (
        <>
          <Link className="ms-2 fs-5 text-danger" to="">
            <RiDeleteBin5Line />
          </Link>
        </>
      ),
    });
  }

  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Enquiries;
