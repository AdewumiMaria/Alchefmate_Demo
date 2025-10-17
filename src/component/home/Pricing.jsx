import React from "react";
import line from "../assest/line.png";
import img1 from "../assest/pricing1.png";
import img2 from "../assest/pricing2.png";
import { BsDot } from "react-icons/bs";
const Pricing = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="py-5">
          <div className="d-flex gap-2 pricing">
            <h1 className="text-green fs-8 mt-2">Pricing</h1>
            <div className="w-5">
              <img src={line} className="w-90" alt="" />
            </div>
            <p className="text-green fs-7 mt-2">
              Find your perfect plan: tailored pricing <br /> for every need
            </p>
          </div>
          <div className=" d-sm-flex mt-4 pricingsec">
            <div className="w-10 my-8 div1">
              <img src={img1} className="w-100" alt="" />
            </div>
            <div className="border-green px-5 py-5 border-end-0 rounded-5 ms-0 my-5 div2">
              <h3 className="text-green fs-11 text-center">Free Plan</h3>
              <p className="text-green text-center fs-11 fw-medium ptag">$0</p>
              <p className="text-green fs-7 mb-5 text-center">per month</p>
              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="text-green fs-7">Basic AI meal planning</p>
              </div>
              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="text-green fs-7">Limited recipe access</p>
              </div>
              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="text-green fs-7">Manual grocery list creation</p>
              </div>
              <div className=" border-bottom border-green my-5"></div>
              <p className="text-green fs-7 mb-8">
                <span className="fw-medium">Best For</span>: Those who want
                <br /> explore thae platform's basic <br /> functionalities.
              </p>
              <button className="py-3 px-4 bg-transparent border-green fs-7 rounded-pill">
                Get Started For Free
              </button>
            </div>
            <div className="border-green py-6 px-5 rounded-5 bg-lightgreen div3">
              <h3 className="text-green fs-11 text-center">Standard Plan</h3>
              <p className="text-green text-center fs-11 fw-medium ptag">
                $9.99
              </p>
              <p className="fs-7 text-green text-center mb-5">per month</p>
              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="text-green fs-7">
                  Comprehensive AI meal planning
                </p>
              </div>
              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="text-green fs-7">Full recipe library access</p>
              </div>

              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="text-green fs-7">Automated grocery lists</p>
              </div>
              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="text-green fs-7">Grocery delivery integration</p>
              </div>
              <div className="border-bottom border-green my-5"></div>
              <p className="text-green fs-7 mb-8">
                <span className="fw-medium">Best For</span>: Individuals or
                families <br /> looking for full meal planning <br /> support
                and convenience.
              </p>
              <button className="fs-7 text-white bg-green rounded-pill border-green py-3 px-6">
                Subscribe Now
              </button>
            </div>
            <div className="border-green py-5 px-4 rounded-5 border-start-0 my-5 div4">
              <h3 className="text-green fs-11 text-center">Premium Plan</h3>
              <p className="text-green fs-11 text-center fw-medium ptag">
                $19.99
              </p>
              <p className="fs-7 text-green text-center mb-5">per month</p>

              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="fs-7 text-green">All Standard features</p>
              </div>
              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="fs-7 text-green">Exclusive gourmet recipes</p>
              </div>
              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="fs-7 text-green">Nutritional consultations</p>
              </div>
              <div className="d-flex gap-2">
                <BsDot className="fs-3 text-green" />
                <p className="fs-7 text-green">
                  Advanced customization options
                </p>
              </div>
              <div className="border-green border-bottom my-5"></div>
              <p className="fs-7 text-green mb-8 ptag">
                <span className="fw-medium"> Best For</span>: Users seeking a
                <br /> premium culinary experience <br /> with added
                personalization and <br /> expert guidance.
              </p>
              <button className="border-green fs-7 bg-transparent py-3 px-6 rounded-pill">
                Go Premium
              </button>
            </div>
            <div className="w-10 my-8 div5">
              <img src={img2} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
