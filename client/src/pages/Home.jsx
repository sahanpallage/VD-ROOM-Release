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
import { services } from "../utils/Data";

const Home = () => {
  const famousImages = [famous1, famous2, famous3, famous4];

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
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
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
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row g-4">
          {/* Add gaps between columns */}
          {famousImages.map((famous, index) => (
            <div className="col-3">
              <div className="famous-card position-relative bg-white rounded-3">
                {/* Add background and border radius here */}
                <img className="img-fluid" src={famous} alt="" />
                <div className="famous-content position-absolute">
                  <h5
                    className={
                      index === 0
                        ? "text-white"
                        : index === 1
                        ? "text-slate-400"
                        : index === 2
                        ? "text-neutral-900"
                        : "text-stone-400"
                    }
                  >
                    {index === 0 ? "Big Screen" : "Trending Outfits"}
                  </h5>
                  <h6
                    className={
                      index === 0
                        ? "text-white"
                        : index === 1
                        ? "text-slate-400"
                        : index === 2
                        ? "text-neutral-900"
                        : "text-stone-400"
                    }
                  >
                    {index === 0
                      ? "Big Screen"
                      : index === 1
                      ? "T-shirt Dress Sleeve Clothing Skirt"
                      : index === 2
                      ? "White crew-neck shirt"
                      : "Hoodie T-shirt Clothing Bluza Sweater"}
                  </h6>
                  <p
                    className={
                      index === 0
                        ? "text-white"
                        : index === 1
                        ? "text-slate-400"
                        : index === 2
                        ? "text-neutral-900"
                        : "text-stone-400"
                    }
                  >
                    {index === 0
                      ? "From LKR 120,000 or LKR 5,000/mo. for 24 mo.*"
                      : index === 1
                      ? "Comfortable, Stretching, Living"
                      : index === 2
                      ? "Slim-Fit, Attractive, Satisfaction"
                      : "Cozy, Durable, Top Quality"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
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
            <SpecialProduct />
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
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
      </Container>
      <Container class1="marquee-wrapper home-wrapper-2 py-5">
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
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
