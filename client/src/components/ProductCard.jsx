import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/heart.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="images/watch.png" alt="watch" />
          <img className="img-fluid" src="images/watch-1.jpeg" alt="watch" />
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
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/cross-arrows.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="addToCart" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/vr.svg" alt="3dModel" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
