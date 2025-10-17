import React from "react";
import line from "../assest/line.png";
import img1 from "../assest/need.png";
const Need = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="py-6">
          <div className="d-flex gap-3 need">
            <h1 className="text-green fs-9 mt-2">Need Assistance?</h1>
            <div className="w-4">
              <img src={line} className="w-100" alt="" />
            </div>
            <p className="text-green fs-7 mt-3">We're here to help!</p>
          </div>
          <div className="w-95 rounded-start-pill ms-4 border-green border-end-0 d-sm-flex gap-3 my-5 needsec">
            <div className="w-70 div1">
              <div className="w-90 ms-5 mt-5 py-2  border-green rounded-pill img">
                <div className="w-95 m-4 border border-0 rounded-pill ">
                  <img src={img1} className="w-100" alt="" />
                </div>
              </div>
            </div>
            <div className="div2">
              <p className="text-green fs-12 ">
                Have questions or need <br /> help with AIChefMate? <br /> Our
                dedicated support <br /> team is ready to assist <br /> you. Get
                the answers <br /> and assistance you <br /> need to make the
                most <br /> of your meal planning <br />
                experience.
              </p>
              <button className="text-green bg-lightgreen fs-7 text-center py-2 px-5 rounded-5 border-0 mt-3">
                Get Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Need;
