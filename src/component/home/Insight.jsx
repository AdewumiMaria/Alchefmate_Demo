import React from "react";
import line from "../assest/line.png";
import img1 from "../assest/insight1.png";
import img2 from "../assest/insight2.png";
import img3 from "../assest/insight3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Insight = () => {
  return (
    <section className="bg-ash">
      <div className="container">
        <div className="py-6">
          <div className="d-flex gap-3 my-5 insight">
            <h1 className="fs-9 text-green mt-2">Healthy Insights</h1>
            <div className="w-5">
              <img src={line} className="w-90" alt="" />
            </div>
            <p className="text-green fs-7 mt-2">
              Latest News, Expert Blogs, and <br /> Nutritional Learning
            </p>
          </div>
          <div className=" d-sm-flex gap-3 insightsec">
            <div className="bg-white w-35 py-4 px-3 rounded-5 div1">
              <div className="w-100">
                <img src={img1} className="w-100 rounded-5" alt="" />
              </div>
              <h3 className="fs-11 text-green fw-normal mt-3">
                Mastering Meal Prep: <br /> Time-Saving Tips for <br /> Busy
                Weekdays
              </h3>
              <button className="bg-lightgreen text-green fs-7 border-0 text-center py-3 px-5 fw-medium rounded-pill my-4">
                Read Article
                <span className="ms-3">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
            <div className="w-35 bg-white py-4 px-3 rounded-5 div2">
              <div className="w-100">
                <img src={img2} className="w-100 rounded-5" alt="" />
              </div>
              <h3 className="text-green fs-11 fw-normal mt-3">
                The Power of Plant- <br />
                Based: Benefits <br />
                Beyond the Plate
              </h3>
              <button className="bg-lightgreen border-0 fs-7 text-green py-3 px-5 fw-medium rounded-pill text-center my-4">
                Read Article
                <span className="ms-3">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
            <div className="w-35 bg-white py-4 px-3 rounded-5 div3">
              <div className="w-100">
                <img src={img3} className="w-100 rounded-5" alt="" />
              </div>
              <h3 className="fs-11 fw-normal text-green mt-3">
                Balancing Nutrients: <br />A Guide to a Well- <br />
                Diet Rounded
              </h3>
              <button className="bg-lightgreen text-green fs-7 fw-medium border-0 py-3 px-5 rounded-pill my-4 text-center">
                Read Artictle
                <span className="ms-3">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
