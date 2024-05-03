import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAColor,
  deleteColor,
  getColors,
  resetState,
} from "../features/color/colorSlice";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "CNo",
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

const ColorList = () => {
  const [open, setOpen] = useState(false);
  const [colorId, setColorId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setColorId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getColors());
  }, []);
  const colorState = useSelector((state) => state.color.colors);
  const data1 = [];
  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i + 1,
      title: colorState[i].title,
      action: (
        <>
          <Link
            className=" fs-5 text-warning"
            to={`/admin/color/${colorState[i]._id}`}
          >
            <TbEdit />
          </Link>
          <button
            className="ms-2 fs-5 text-danger bg-transparent border-0"
            onClick={() => showModal(colorState[i]._id)}
          >
            <RiDeleteBin5Line />
          </button>
        </>
      ),
    });
  }

  const deleteColor = (e) => {
    dispatch(deleteAColor(e)).then(() => {
      setOpen(false);
      dispatch(getColors());
    });
  };

  return (
    <div>
      <h3 className="mb-4 title">Colors</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteColor(colorId);
        }}
        title="Are you sure you want to delete this brand?"
      />
    </div>
  );
};

export default ColorList;
