import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUser, getOrders } from "../features/order/orderSlice";
import { Link, useLocation } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { generatePDFReport } from "../utils/ordersReport/viewOrderReport";

const columns = [
  {
    title: "OrdNo",
    dataIndex: "key",
  },
  {
    title: "Product Name",
    dataIndex: "name",
  },
  {
    title: "Brand Name",
    dataIndex: "brand",
  },
  {
    title: "Count",
    dataIndex: "count",
  },
  {
    title: "Color",
    dataIndex: "color",
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

const ViewOrder = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[3];
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderByUser(userId));
  }, []);
  const getOrdersState = useSelector(
    (state) => state.order.orderByUser?.products
  );
  useEffect(() => {
    if (!getOrdersState) return;
    const data1 = [];
    for (let i = 0; i < getOrdersState.length; i++) {
      data1.push({
        key: i + 1,
        name: getOrdersState[i].product.title,
        brand: getOrdersState[i].product.brand,
        count: getOrdersState[i].count,
        color: getOrdersState[i].color,
        amount: getOrdersState[i].product.price,
        date: new Date(
          getOrdersState[i].product.createdAt
        ).toLocaleDateString(),
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
    setOrders(data1); // update the orders state
  }, [getOrdersState]);
  return (
    <div>
      <h3 className="mb-4 title">View Order</h3>
      <div>
        <Table columns={columns} dataSource={orders} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <p
          style={{
            marginBottom: "20px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Generate report
        </p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            fontWeight: "bold",
            padding: "5px 10px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={() => generatePDFReport(orders)}
        >
          Click here
        </button>
      </div>
    </div>
  );
};

export default ViewOrder;