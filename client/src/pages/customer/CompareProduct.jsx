import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import Color from "../../components/Color";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross"
                />
                <div className="product-card-image">
                  <img
                    className="img-fluid"
                    src="images/watch2.png"
                    alt="watch"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Apple Watch Series 9 45mm GPS Apple Watch S9 Aluminum Case
                    with Sport Band iOS Smart Watch
                  </h5>
                  <h6 className="price mb-3 mt-3">LKR 128,779.73</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>41mm</p>,<p>45mm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross"
                />
                <div className="product-card-image">
                  <img
                    className="img-fluid"
                    src="images/watch2.png"
                    alt="watch"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Apple Watch Series 9 45mm GPS Apple Watch S9 Aluminum Case
                    with Sport Band iOS Smart Watch
                  </h5>
                  <h6 className="price mb-3 mt-3">LKR 128,779.73</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>41mm</p>,<p>45mm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
