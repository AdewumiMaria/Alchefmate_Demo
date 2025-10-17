import React from "react";
import icon1 from "../assest/ban-icon.png";
import icon2 from "../assest/ban-icon2.png";
import icon3 from "../assest/carrot-icon.png";
import icon4 from "../assest/roller-icon.png";
import img1 from "../assest/ban-img1.png";
import img2 from "../assest/ban-img2.png";
import img3 from "../assest/ban-img3.png";
import img4 from "../assest/ban-img4.png";
const Banner = () => {
  return (
    <section className="bg-light banner">
      <div className="container">
        <div>
          <div className="bannersec-1 d-flex gap-sm-5 justify-content-center">
            <div className="w-5 h-10 p-2 bg-lightgreen text-center rounded-circle mt-5 icon ">
              <img src={icon1} className="w-90 " alt="" />
            </div>
            <div>
              <h1 className="text-green fs-10">
                Elevate Your Mealtime with <br /> AI-Powered Personalization
              </h1>
            </div>
            <div className="w-5 h-10 bg-white text-center p-2  rounded-circle mt-5 icon">
              <img src={icon2} className="w-90" alt="" />
            </div>
          </div>
          <div>
            <div className="d-flex gap-sm-6 justify-content-center bannersec-2">
              <div className="w-4 h-5 bg-transparent text-center py-2  border border-black mt-4 rounded-circle icon">
                <img src={icon3} className="w-60" alt="" />
              </div>
              <div className="fs-4 mt-3">
                <p>Effortless Planning, Healthier Eating</p>
              </div>
              <div className="w-4 h-5 bg-green text-center py-2 rounded-circle mt-4 icon">
                <img src={icon4} className="w-60" alt="" />
              </div>
            </div>
            <div className="d-sm-flex gap-3 bannersec-3">
              <div className="w-20 h-50 bg-white rounded-5 bansec-31">
                <h1 className="fs-9 text-green ms-2">95%</h1>
                <p className="fs-4 text-green ms-2">
                  Improved Eating <br /> Habits
                </p>
                <img src={img1} className="w-85 m-3 rounded-3 img" alt="" />
              </div>
              <div className="w-20 h-50 rounded-5 mt-4 bansec-32">
                <img src={img2} className="w-100" alt="" />
              </div>
              <div className="w-20 h-50 mt-4 bansec-33">
                <button className="px-5 py-3 rounded-pill text-green border-green fw-medium fs-5 bg-transparent mb-4 m-2">
                  Try Our Demo
                </button>
                <br />
                <button className="px-5 py-3 rounded-pill text-green bg-lightgreen fw-medium fs-5 mb-4 border-0 m-2">
                  Start For Free
                </button>
                <div className="w-100 p-3 bg-green text-lightgreen rounded-5 text-center div">
                  <h3 className="fs-8">30 000 +</h3>
                  <p className="fs-4">Happy Users</p>
                </div>
              </div>
              <div className="w-20 h-50 bg-white rounded-5 mt-4 pt-3 bansec-34">
                <img src={img3} className="w-85 m-3 mt-2 rounded-3" alt="" />
                <h1 className="text-green ms-2 fs-9">25%</h1>
                <p className="text-green ms-2 fs-4 ">Saved on Groceries</p>
              </div>
              <div className="w-20 h-50 bansec-35">
                <img src={img4} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
