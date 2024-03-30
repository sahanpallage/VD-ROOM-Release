import React from "react";
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="">
            <img
              src="images/purple-t-shirt.jpg"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div>
            <div className="special-product-content">
              <h5 className="s-brand">US Polo</h5>
              <h6 className="s-title">Slim Fit T-Shirt</h6>
              <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
              />
              <p className="s-price">
                <span className="red-p">LKR 3800</span> &nbsp;
                <strike>LKR 4200</strike>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
