import React, { useState } from "react";
import "../index.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  MdAddToPhotos,
  MdChecklist,
  MdChecklistRtl,
  MdLibraryAddCheck,
  MdNotifications,
  MdOutlineAddShoppingCart,
  MdOutlineShoppingCartCheckout,
  MdSupportAgent,
} from "react-icons/md";
import {
  AiOutlineDashboard,
  AiOutlineBgColors,
  AiOutlineHolder,
} from "react-icons/ai";
import { BiCategoryAlt, BiListUl } from "react-icons/bi";
import {
  LiaOpencart,
  LiaUser,
  LiaListUlSolid,
  LiaBlogSolid,
} from "react-icons/lia";
import { SiBrandfolder } from "react-icons/si";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigateTo = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">VDR</span>
            <span className="lg-logo">VD-ROOM</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigateTo(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <LiaUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catalogue",
              icon: <LiaOpencart className="fs-4" />,
              label: "Catalogue",
              children: [
                {
                  key: "product",
                  icon: <MdOutlineAddShoppingCart className="fs-4" />,
                  label: "Add product",
                },
                {
                  key: "product-list",
                  icon: <MdOutlineShoppingCartCheckout className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "category-b",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "list-category-b",
                  icon: <LiaListUlSolid className="fs-4" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiListUl className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "color-l",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <AiOutlineHolder className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <LiaBlogSolid className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <MdAddToPhotos className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <MdChecklist className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <MdLibraryAddCheck className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <MdChecklistRtl className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <MdSupportAgent className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-3"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 32,
              height: 32,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <MdNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <img src="images/user-profile.svg" alt="" />
              </div>
              <div>
                <h5 className="mb-0">Sahan Pallage</h5>
                <p className="mb-0">sahanpallage19@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
