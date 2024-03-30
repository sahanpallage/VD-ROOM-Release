import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";

const SignUp = () => {
  return (
    <>
      <Meta title={"Create Account"} />
      <BreadCrumb title="Create Account" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile No"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      className="form-control"
                    />
                  </div>
                  <div className="">
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Sign Up</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
