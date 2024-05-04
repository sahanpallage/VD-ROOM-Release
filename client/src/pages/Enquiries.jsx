import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAEnquiry,
  getEnquiries,
  updateAEnquiry,
} from "../features/enquiry/enquirySlice";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import CustomModal from "../components/CustomModal";
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
  const [open, setOpen] = useState(false);
  const [enqId, setEnqId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setEnqId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
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
          <select
            className="form-control form-select"
            defaultValue={
              getEnquiryState[i].status ? getEnquiryState[i].status : "Pending"
            }
            name=""
            id=""
            onChange={(e) =>
              setEnquiryStatus(e.target.value, getEnquiryState[i]._id)
            }
          >
            <option value="Set Status">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Resolved">Resolved</option>
            <option value="In Progress">In Progress</option>
          </select>
        </>
      ),

      action: (
        <>
          <Link
            className="ms-2 fs-5 text-danger"
            to={`/admin/enquiries/${getEnquiryState[i]._id}`}
          >
            <IoEyeSharp />
          </Link>
          <button
            className="ms-2 fs-5 text-danger bg-transparent border-0"
            onClick={() => showModal(getEnquiryState[i]._id)}
          >
            <RiDeleteBin5Line />
          </button>
        </>
      ),
    });
  }

  const setEnquiryStatus = (e, i) => {
    const data = { id: i, enqData: e };
    dispatch(updateAEnquiry(data)).then(() => {
      dispatch(getEnquiries());
    });
  };

  const deleteEnquiry = (e) => {
    dispatch(deleteAEnquiry(e)).then(() => {
      setOpen(false);
      dispatch(getEnquiries());
    });
  };

  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteEnquiry(enqId);
        }}
        title="Are you sure you want to delete this enquiry?"
      />
    </div>
  );
};

export default Enquiries;
