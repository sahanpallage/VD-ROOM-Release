import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blogs-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <IoArrowBackSharp className="fs-4" />
                  Go back to Blogs
                </Link>
                <h3 className="title">A beautiful day to fashion</h3>
                <img
                  className="img-fluid w-100 my-4"
                  src="../images/banner3.jpg"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat, explicabo eveniet! Ratione ipsam quos quas eaque? Et
                  fuga quasi provident distinctio consequatur eius cum,
                  temporibus ex! Quam aperiam doloribus repellendus soluta minus
                  accusantium assumenda beatae ad provident dolore, quas ex
                  excepturi quo voluptatibus suscipit officiis asperiores in
                  fuga iste iusto. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Inventore earum excepturi exercitationem,
                  nesciunt asperiores vitae iusto doloribus cumque incidunt
                  tempora dicta necessitatibus natus consequatur perferendis
                  porro beatae rerum nihil! Libero nisi incidunt blanditiis
                  voluptas autem ex, necessitatibus, soluta nihil eum veritatis
                  sit quia deserunt fugiat similique natus quam, quod facilis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
