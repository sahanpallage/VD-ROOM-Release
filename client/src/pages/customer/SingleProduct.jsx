import React, { useState } from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../../components/Color";
import { TbArrowsExchange, TbBasketHeart } from "react-icons/tb";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const props = {
    width: 600,
    height: 500,
    zoomWidth: 600,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Details"} />
      <BreadCrumb title="Product Details" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Black Crew Neck T-Shirt</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">LKR 4000</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="2"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a
                    className="review-btn text-decoration-underline"
                    href="#review"
                  >
                    Write a Review
                  </a>
                </div>
                <div className="">
                  <div className=" py-3">
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Type :</h3>
                      <p className="product-data">Shirt</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Brand :</h3>
                      <p className="product-data">Carnage</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Category :</h3>
                      <p className="product-data">Clothing</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Tags :</h3>
                      <p className="product-data">Popular</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Availability :</h3>
                      <p className="product-data">In Stock</p>
                    </div>
                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                      <h3 className="product-heading">Size :</h3>
                      <div className="d-flex flex-wrap gap-15">
                        <span className="badge border-1 bg-white text-dark border-secondary">
                          S
                        </span>
                        <span className="badge border-1 bg-white text-dark border-secondary">
                          M
                        </span>
                        <span className="badge border-1 bg-white text-dark border-secondary">
                          L
                        </span>
                        <span className="badge border-1 bg-white text-dark border-secondary">
                          XL
                        </span>
                      </div>
                    </div>
                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                      <h3 className="product-heading">Color :</h3>
                      <Color />
                    </div>
                    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                      <h3 className="product-heading">Quantity :</h3>
                      <div>
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          className="form-control"
                          style={{ width: "70px" }}
                          id=""
                        />
                      </div>
                      <div className="d-flex align-items-center gap-30 ms-5">
                        <button className="button border-0" type="submit">
                          Add To Cart
                        </button>
                        <button className="button signup">Buy Now</button>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                      <div>
                        <a href="">
                          <TbArrowsExchange className="fs-5 me-2" />
                          Add To Compare
                        </a>
                      </div>
                      <div>
                        <a href="">
                          <TbBasketHeart className="fs-5 me-2" />
                          Add To Wishlist
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-10 my-3">
                      <h3 className="product-heading">Shipping & Returns :</h3>
                      <p className="product-data">
                        Free shipping and returns available on all orders!
                        <br /> We ship all US domestic orders within 5-10
                        business days!
                        <br />
                      </p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-3">
                      <h3 className="product-heading">Copy Product Link:</h3>
                      <a
                        href="javascript:void(0)"
                        onClick={() => {
                          copyToClipboard(
                            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          );
                        }}
                      >
                        Copy Product Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h4>Description</h4>
                <div className="bg-white p-3">
                  <p className="bg-white p-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi impedit perferendis odit quasi repellat placeat eius
                    dicta consequuntur pariatur, earum suscipit omnis obcaecati
                    commodi? Atque culpa cumque non dolore nemo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="reviews-wrapper home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 id="review" className="reviews-wrapper">
                  Reviews
                </h3>
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-center">
                    <div>
                      <h4 className="mb-2">Customer Reviews</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value="3"
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 3 reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                        <a
                          className="text-dark text-decoration-underline"
                          href=""
                        >
                          Write a review
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value="3"
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="form-control w-100"
                          rows="4"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button border-0" type="submit">
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="reviews mt-4">
                    <div className="review">
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">John Doe</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value="3"
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatibus corporis veritatis nostrum explicabo
                        nam eaque officiis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Featured Collection</h3>
              </div>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
