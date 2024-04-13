import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Meta from "../../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross"
                />
                <div className="wishlist-card-image">
                  <img
                    className="img-fluid"
                    src="images/watch2.png"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Apple Watch Series 9 45mm GPS Apple Watch S9 Aluminum Case
                    with Sport Band iOS Smart Watch
                  </h5>
                  <h6 className="price">LKR 128,779.73</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross"
                />
                <div className="wishlist-card-image">
                  <img
                    className="img-fluid"
                    src="images/watch2.png"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Apple Watch Series 9 45mm GPS Apple Watch S9 Aluminum Case
                    with Sport Band iOS Smart Watch
                  </h5>
                  <h6 className="price">LKR 128,779.73</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross"
                />
                <div className="wishlist-card-image">
                  <img
                    className="img-fluid"
                    src="images/watch2.png"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Apple Watch Series 9 45mm GPS Apple Watch S9 Aluminum Case
                    with Sport Band iOS Smart Watch
                  </h5>
                  <h6 className="price">LKR 128,779.73</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
