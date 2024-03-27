import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="product-image">
          <img className="img-fluid" src="images/watch.png" alt="watch" />
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">
            Apple Watch Series 8 GPS + Cellular, 40mm
          </h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">LKR 180,000</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
