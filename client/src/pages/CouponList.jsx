import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  deleteACoupon,
  getCoupons,
  resetState,
} from "../features/coupon/couponSlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "CoupNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Discount",
    dataIndex: "discount",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Expiration",
    dataIndex: "expiry",
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const CouponList = () => {
  const [open, setOpen] = useState(false);
  const [couponId, setCouponId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setCouponId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getCoupons());
  }, []);
  const couponState = useSelector((state) => state.coupon.coupons);
  const data1 = [];
  for (let i = 0; i < couponState.length; i++) {
    data1.push({
      key: i + 1,
      title: couponState[i].name,
      discount: couponState[i].discount,
      expiry: new Date(couponState[i].expiry).toLocaleDateString(),
      action: (
        <>
          <Link
            className=" fs-5 text-warning"
            to={`/admin/coupon/${couponState[i]._id}`}
          >
            <TbEdit />
          </Link>
          <button
            className="ms-2 fs-5 text-danger bg-transparent border-0"
            onClick={() => showModal(couponState[i]._id)}
          >
            <RiDeleteBin5Line />
          </button>
        </>
      ),
    });
  }
  const deleteCoupon = (e) => {
    dispatch(deleteACoupon(e)).then(() => {
      setOpen(false);
      dispatch(getCoupons());
    });
  };
  return (
    <div>
      <h3 className="mb-4 title">Coupons</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteCoupon(couponId);
        }}
        title="Are you sure you want to delete this brand?"
      />
    </div>
  );
};

export default CouponList;
