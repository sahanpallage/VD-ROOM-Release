import React from "react";
import "../index.css";
import { Column } from "@ant-design/plots";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Table } from "antd";

const columns = [
  {
    title: "SNo",
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
    title: "Status",
    dataIndex: "status",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const Dashboard = () => {
  const config = {
    data: [
      {
        type: "Jan",
        sales: 38,
      },
      {
        type: "Feb",
        sales: 52,
      },
      {
        type: "Mar",
        sales: 61,
      },
      {
        type: "Apr",
        sales: 145,
      },
      {
        type: "May",
        sales: 48,
      },
      {
        type: "Jun",
        sales: 38,
      },
      {
        type: "Jul",
        sales: 38,
      },
      {
        type: "Aug",
        sales: 38,
      },
      {
        type: "Sep",
        sales: 38,
      },
      {
        type: "Oct",
        sales: 38,
      },
      {
        type: "Nov",
        sales: 38,
      },
      {
        type: "Dec",
        sales: 38,
      },
    ],
    xField: "type",
    yField: "sales",
    columnStyle: () => {
      return { fill: "#ffd333" };
    },
    label: {
      position: "bottom",
      style: {
        fill: "#fff",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p>
            <h4 className="mb-0">LKR 4000</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green-text ">
              <BsArrowUpRight />
              35%
            </h6>
            <p className="mb-0">Compared To April 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p>
            <h4 className="mb-0">LKR 4000</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red-text">
              <BsArrowDownRight />
              35%
            </h6>
            <p className="mb-0">Compared To April 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p>
            <h4 className="mb-0">LKR 4000</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green-text">
              <BsArrowUpRight />
              35%
            </h6>
            <p className="mb-0">Compared To April 2023</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Income Statistics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
