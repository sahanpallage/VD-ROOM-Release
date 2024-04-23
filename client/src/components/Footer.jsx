import React from "react";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaSquareFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.svg" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 ">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  VD-ROOM Store <br /> 123, 1st Floor, Galle Road, Colombo 04
                  <br /> Sri Lanka
                </address>
                <a
                  href="tel:+94 702922428"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +94 702922428
                </a>
                <a href="mailto:" className="mt-2 d-block mb-0 text-white">
                  vdroom0811@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a
                    className="text-white"
                    href="https://www.linkedin.com/in/sahan-pallage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.facebook.com/RasanduSahan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareFacebook />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.instagram.com/sahannn.r/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="text-white"
                    href="https://twitter.com/sahannn_r"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/terms-Conditions" className="text-white py-2 mb-1">
                  Terms Of Service
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3 ">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2 ">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Ladies</Link>
                <Link className="text-white py-2 mb-1">Mens</Link>
                <Link className="text-white py-2 mb-1">Sleeves</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by VD-ROOM Team
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
