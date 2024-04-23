import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import CustomInput from "./CustomInput";

const SignUp = () => {
  return (
    <>
      <Meta title={"Create Account"} />
      <BreadCrumb title="Create Account" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                />
                <CustomInput
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput type="tel" name="mobile" placeholder="Mobile No" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div className="">
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
