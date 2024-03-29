import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img className="img-fluid" src="images/banner-3.jpg" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">27 Mar, 2024</p>
          <h5 className="title">A beautiful day to fashion</h5>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ab
            fugiat nemo praesentium? Dolorum, laudantium accusantium quam
            mollitia quia illum.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
