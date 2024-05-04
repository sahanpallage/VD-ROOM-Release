import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import LoginCustomer from "./pages/customer/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import BlogCatlist from "./pages/BlogCatList";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorList";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import AddBlog from "./pages/AddBlog";
import AddBlogCat from "./pages/AddBlogCat";
import AddColor from "./pages/AddColor";
import AddCategory from "./pages/AddCategory";
import AddProduct from "./pages/AddProduct";
import AddBrand from "./pages/AddBrand";
import OurStore from "./pages/customer/OurStore";
import ForgotPasswordCustomer from "./pages/customer/ForgotPassword";
import SignUp from "./pages/customer/SignUp";
import ResetPasswordCustomer from "./pages/customer/ResetPassword";
import SingleProduct from "./pages/customer/SingleProduct";
import Cart from "./pages/customer/Cart";
import Checkout from "./pages/customer/Checkout";
import Blog from "./pages/customer/Blog";
import CompareProduct from "./pages/customer/CompareProduct";
import Wishlist from "./pages/customer/Wishlist";
import SingleBlog from "./pages/customer/SingleBlog";
import PrivacyPolicy from "./pages/customer/PrivacyPolicy";
import RefundPolicy from "./pages/customer/RefundPolicy";
import TermsAndConditions from "./pages/customer/TermsAndConditions";
import ShippingPolicy from "./pages/customer/ShippingPolicy";
import { ToastContainer } from "react-toastify";
import CouponList from "./pages/CouponList";
import AddCoupon from "./pages/AddCoupon";
import ViewEnq from "./pages/ViewEnq";
import ViewOrder from "./pages/ViewOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:id" element={<SingleBlog />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cus-login" element={<LoginCustomer />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="cus-signup" element={<SignUp />} />
            <Route path="cus-forgetPass" element={<ForgotPasswordCustomer />} />
            <Route path="cus-resetPass" element={<ResetPasswordCustomer />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="terms-Conditions" element={<TermsAndConditions />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="enquiries/:id" element={<ViewEnq />} />
            <Route path="blog-list" element={<Bloglist />} />
            <Route path="blog" element={<AddBlog />} />
            <Route path="blog/:id" element={<AddBlog />} />
            <Route path="coupon" element={<AddCoupon />} />
            <Route path="coupon/:id" element={<AddCoupon />} />
            <Route path="coupon-list" element={<CouponList />} />
            <Route path="blog-category-list" element={<BlogCatlist />} />
            <Route path="blog-category" element={<AddBlogCat />} />
            <Route path="blog-category/:id" element={<AddBlogCat />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:id" element={<ViewOrder />} />
            <Route path="customers" element={<Customers />} />
            <Route path="color-list" element={<ColorList />} />
            <Route path="color" element={<AddColor />} />
            <Route path="color/:id" element={<AddColor />} />
            <Route path="list-category" element={<CategoryList />} />
            <Route path="category" element={<AddCategory />} />
            <Route path="category/:id" element={<AddCategory />} />
            <Route path="list-brand" element={<BrandList />} />
            <Route path="brand" element={<AddBrand />} />
            <Route path="brand/:id" element={<AddBrand />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="product" element={<AddProduct />} />
          </Route>
        </Routes>
        <ToastContainer position="top-center" autoClose={1000} />
      </BrowserRouter>
    </>
  );
}

export default App;
