import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/order/orderSlice";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";

const columns = [
  {
    title: "OrdNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Actions",
    dataIndex: "action",
  },
];

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const getOrdersState = useSelector((state) => state.order.orders);
  const data1 = [];
  for (let i = 0; i < getOrdersState.length; i++) {
    data1.push({
      key: i + 1,
      name:
        getOrdersState[i].orderBy.firstname +
        " " +
        getOrdersState[i].orderBy.lastname,
      product: getOrdersState[i].products
        .map((i) => {
          return i.product.title;
        })
        .join(", "),
      amount: getOrdersState[i].paymentIntent.amount,
      date: new Date(getOrdersState[i].createdAt).toLocaleDateString(),
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
      <h3 className="mb-4 title">Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Orders;
