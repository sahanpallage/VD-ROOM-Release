import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className="review-form">
        <form action="" className="d-flex flex-column gap-15">
          <div>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div>
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile No"
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
          <div>
            <button className="button border-0" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
