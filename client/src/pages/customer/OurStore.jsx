import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Meta from "../../components/Meta";
import greytshirt from "../../images/greytshirt.jpg";
import ReactStars from "react-rating-stars-component";

const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Women's</li>
                    <li>Men's</li>
                    <li>Watches</li>
                    <li>Headwear</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title2">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id=""
                        value=""
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id=""
                        value=""
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        Out Of Stock (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id=""
                        value=""
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        Default checkbox
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title2">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title2">Color</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title2">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="color-1"
                        value=""
                        className="form-check-input"
                      />
                      <label htmlFor="color-1" className="form-check-label">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="color-2"
                        value=""
                        className="form-check-input"
                      />
                      <label htmlFor="color-2" className="form-check-label">
                        M (3)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="color-3"
                        value=""
                        className="form-check-input"
                      />
                      <label htmlFor="color-3" className="form-check-label">
                        L (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Sleeves
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Crop Tops
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Watches
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img className="img-fluid" src={greytshirt} alt="" />
                    </div>
                    <div className="w-50">
                      <h5>Grey Crew Neck T-Shirt</h5>
                      <div className="rating">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </div>
                      <b>LKR 3000</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img className="img-fluid" src={greytshirt} alt="" />
                    </div>
                    <div className="w-50">
                      <h5>Grey Crew Neck T-Shirt</h5>
                      <div className="rating">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </div>
                      <b>LKR 3000</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select className="form-control form-select" name="" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
                      <img
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
                      <img
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
                      <img
                        src="images/gr1.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
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

export default OurStore;
