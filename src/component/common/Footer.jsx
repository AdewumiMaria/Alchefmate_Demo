import React from "react";
import img1 from "../assest/Logo (13).png";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-green">
      <div className="container">
        <div className="py-6">
          <div className="d-sm-flex gap-3 footer">
            <div className="d-sm-flex gap-3 footersec">
              <div className="footersec-1">
                <div className="d-flex gap-4 div1">
                  <div className="w-15 footimg">
                    <img src={img1} className="w-100" alt="" />
                  </div>
                  <div>
                    <ul>
                      <li className="nav">
                        <a
                          href="#recipes"
                          className="text-lightgreen fs-7 mb-5"
                        >
                          Recipes
                        </a>
                      </li>
                      <li className="nav">
                        <a href="#Blog" className="text-lightgreen fs-7">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="nav">
                        <a
                          href="#customer support"
                          className="text-lightgreen fs-7 mb-5"
                        >
                          Customer Support
                        </a>
                      </li>
                      <li className="nav">
                        <a href="#Profile" className="text-lightgreen fs-7">
                          Profile
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-ash fs-5 mt-5">
                  © 2064 AIChefMate. All rights reserved. |
                  <span className="footer-span"> Privacy Policy </span> |
                  <span className="footer-span"> Terms of Use</span>
                </p>
              </div>
              <div className="footersec-2">
                <p className="text-lightgreen fs-7">
                  Join us on our journey to make meal planning simple and <br />
                  joyful. Connect with us on social media, explore our FAQs
                  <br /> for quick answers, or drop us a line anytime.
                </p>
              </div>
            </div>
            <div className="footersec-3">
              <div className="bg-white text-green py-2 px-3 fs-4 rounded-circle icon">
                <FaFacebookF className="icons" />
              </div>
              <div className="bg-white text-green py-2 px-3 fs-4 rounded-circle my-3 icon">
                <BsTwitterX className="icons" />
              </div>
              <div className="bg-white text-green py-2 px-3 fs-4 rounded-circle icon">
                <FaTiktok className="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
