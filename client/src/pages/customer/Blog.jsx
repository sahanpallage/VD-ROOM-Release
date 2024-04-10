import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="blogs-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Women's</li>
                    <li>Men's</li>
                    <li>Watches</li>
                    <li>Headwear</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
