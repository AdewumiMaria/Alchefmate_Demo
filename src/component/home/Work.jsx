import React from "react";
import line from "../assest/line.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import work1 from "../assest/work1.png";
import work2 from "../assest/work2.png";
import work3 from "../assest/work3.png";
const Work = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="py-5">
          <div className="d-flex gap-3 work">
            <h1 className="text-green fs-8">How it works</h1>
            <div className="w-4 h-5 ">
              <img src={line} className="w-100" alt="" />
            </div>
            <p className="fs-7 text-green">
              Step into the world of hassle-free meal <br /> planning with our
              easy 3-step process
            </p>
          </div>
          <div className="d-sm-flex gap-4 py-5 position-relative worksec">
            <div className=" worksec-1">
              <h1 className="text-green fs-11">01</h1>
              <p className="text-green fs-11 ptag">Personalize Your Profile</p>
              <p className="fs-7 text-green">
                Begin by creating your profile. Tell us about your <br />
                dietary preferences, nutritional goals, and <br /> budget. Our
                AI technology tailors every meal <br />
                plan to fit your unique needs.
              </p>
              <div className="d-flex gap-3 ">
                <div className="bg-white fs-7 px-5  py-3 rounded-pill border-green icon">
                  <FaArrowLeft />
                </div>
                <div className="bg-lightgreen fs-7  px-5 py-3 rounded-pill border-green icon">
                  <FaArrowRightLong />
                </div>
              </div>
              <p className="text-green fs-11 mt-5 ptag">01/03</p>
            </div>
            <div className="worksec-2">
              <div className="w-55 div1 m-5">
                <img src={work1} className="w-100" alt="" />
              </div>
              <div className="w-40 position-absolute top-10 left-45 div2">
                <img src={work2} className="w-100" alt="" />
              </div>
              <div className="w-45 position-absolute top-10 left-51 div3">
                <img src={work3} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
