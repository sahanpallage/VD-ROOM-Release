import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import watch from "../images/watch.png";
import watch1 from "../images/watch1.jpeg";
import crossarrows from "../images/crossarrows.svg";
import addcart from "../images/addcart.svg";
import view from "../images/view.svg";
import vr from "../images/vr.svg";
import heart from "../images/heart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
      <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={heart} alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img className="img-fluid" src={watch} alt="watch" />
          <img className="img-fluid" src={watch1} alt="watch" />
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">
            Apple Watch Series 8 GPS + Cellular, 40mm
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">LKR 180,000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={crossarrows} alt="compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="addToCart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={vr} alt="3dModel" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
