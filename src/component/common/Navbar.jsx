import React from "react";
import logo from "../assest/cheflogo.png";
const Navbar = () => {
  return (
    <section className="bg-light nav">
      <div className="container mt-4">
        <div className="py-5 d-md-flex justify-content-between navsec">
          <div className="w-8 logo ">
            <img src={logo} className="w-100" alt="" />
          </div>
          <div className="sec2">
            <ul className="d-flex nav gap-5 fs-7 fw-medium">
              <li>
                <a href="#recipes" className="text-green link ">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#blog" className="text-green link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#customer support" className="text-green link">
                  Customer Support
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex gap-4 sec-3">
            <p className="text-green fw-medium fs-5 ">Login</p>
            <button className="bg-green text-white fs-4 py-3 px-5 rounded-pill fw-medium">
              Start For Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
