import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
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
import PostCard from "./components/SocialFeed/PostCard";
import PostDetail from "./components/SocialFeed/PostDetail";
import UserPost from "./pages/UserPost";
import UserProfilePosts from "./pages/UserProfilePosts";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import DressingRoom from "./pages/DressingRoom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="blog-list" element={<Bloglist />} />
            <Route path="blog" element={<AddBlog />} />
            <Route path="blog-category-list" element={<BlogCatlist />} />
            <Route path="blog-category" element={<AddBlogCat />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="color-list" element={<ColorList />} />
            <Route path="color" element={<AddColor />} />
            <Route path="list-category" element={<CategoryList />} />
            <Route path="category" element={<AddCategory />} />
            <Route path="list-brand" element={<BrandList />} />
            <Route path="brand" element={<AddBrand />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="product" element={<AddProduct />} />
            <Route path="/" element={<PostCard />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/post/create" element={<UserPost />} />
            <Route path="/post/userposts" element={<UserProfilePosts />} />
            {/* <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/droom" element={<DressingRoom />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
