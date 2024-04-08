import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import famous1 from "../images/famous1.png";
import famous2 from "../images/famous2.png";
import famous3 from "../images/famous3.png";
import famous4 from "../images/famous4.png";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-2.png"
                className="img-fluid rounded-3"
                alt="main"
              />
              <div className="main-banner-content position-absolute">
                <h4>RICH GIRL VIBES</h4>
                <h5>
                  You manifested that rich girl energy & now these <br />
                  ultra-luxe styles are here to make it a reality
                </h5>
                <p>From LKR 10000 or LKR 3000/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/women-style-3.jpg"
                  className="img-fluid rounded-3"
                  alt="main"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>The Perfect Dress For Partying</h5>
                  <p>
                    From LKR 10000 <br /> or LKR 3000/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/women-style-2.jpg"
                  className="img-fluid rounded-3"
                  alt="main"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SELLER</h4>
                  <h5>Vanilla Crop Top Here</h5>
                  <p>
                    From LKR 10000 <br /> or LKR 3000/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/women-style-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SELLER</h4>
                  <h5>Vanilla Crop Top Here</h5>
                  <p>
                    From LKR 10000 <br /> or LKR 3000/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/women-style-4.jpg"
                  className="img-fluid rounded-3"
                  alt="main"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SELLER</h4>
                  <h5>Vanilla Crop Top Here</h5>
                  <p>
                    From LKR 10000 <br /> or LKR 3000/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="images/delivery.svg" alt="services" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all orders over LKR 2000</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/gift.svg" alt="services" />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save upto 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/support.svg" alt="services" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/discount.svg" alt="services" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory Default Price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/credit-card.svg" alt="services" />
                <div>
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% Protected Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Crop Tee Skirts</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    className="custom-image-size-2"
                    src="images/crop-top-skirt.jpg"
                    alt="crop-top-skirt"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Crop Tops</h6>
                    <p>6 Items</p>
                  </div>
                  <img
                    className="custom-image-size-2"
                    src="images/crop-top-skirt-2.jpg"
                    alt="crop-tops"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Crop Tops</h6>
                    <p>6 Items</p>
                  </div>
                  <img
                    className="custom-image-size-2"
                    src="images/crop-top-skirt-2.jpg"
                    alt="crop-tops"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Crop Tee Skirts</h6>
                    <p>8 Items</p>
                  </div>
                  <img
                    className="custom-image-size-2"
                    src="images/crop-top-skirt.jpg"
                    alt="crop-top-skirt"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Crop Tee Skirts</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    className="custom-image-size-2"
                    src="images/crop-top-skirt.jpg"
                    alt="crop-top-skirt"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Crop Tops</h6>
                    <p>6 Items</p>
                  </div>
                  <img
                    className="custom-image-size-2"
                    src="images/crop-top-skirt-2.jpg"
                    alt="crop-tops"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Crop Tee Skirts</h6>
                    <p>5 Items</p>
                  </div>
                  <img
                    className="custom-image-size-2"
                    src="images/crop-top-skirt-2.jpg"
                    alt="crop-top-skirt"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Crop Tee Skirts</h6>
                    <p>8 Items</p>
                  </div>
                  <img
                    className="custom-image-size-2"
                    src="images/crop-top-skirt.jpg"
                    alt="crop-top-skirt"
                  />
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
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src={famous1} alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="">Big Screen</h5>
                  <h6 className="">Smart Watch Series 9</h6>
                  <p className="">
                    From LKR 120,000 or LKR 5,000/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 bg-white" style={{ borderRadius: "12px" }}>
              <div className="famous-card position-relative">
                <img className="img-fluid" src={famous2} alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="text-slate-400">Trending Outfits</h5>
                  <h6 className="text-slate-400">
                    T-shirt Dress Sleeve Clothing Skirt
                  </h6>
                  <p className="text-slate-400">
                    Comfortable, Stretching, Living
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 bg-white" style={{ borderRadius: "12px" }}>
              <div className="famous-card position-relative">
                <img className="img-fluid" src={famous3} alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="text-silver">Trending Outfits</h5>
                  <h6 className="text-silver">White crew-neck shirt</h6>
                  <p className="text-silver">
                    Slim-Fit, Attractive, Satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 bg-white" style={{ borderRadius: "12px" }}>
              <div className="famous-card position-relative">
                <img className="img-fluid" src={famous4} alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="text-silver">Trending Outfits</h5>
                  <h6 className="text-silver">
                    T-shirt Dress Sleeve Clothing Skirt
                  </h6>
                  <p className="text-silver">Comfortable, Stretching, Living</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marquee-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img
                      className="custom-image-size-3"
                      src="images/brand-01.jpg"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="custom-image-size-3"
                      src="images/brand-01.jpg"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="custom-image-size-3"
                      src="images/brand-01.jpg"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="custom-image-size-3"
                      src="images/brand-01.jpg"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="custom-image-size-3"
                      src="images/brand-01.jpg"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="custom-image-size-3"
                      src="images/brand-01.jpg"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="custom-image-size-3"
                      src="images/brand-01.jpg"
                      alt="brand"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
