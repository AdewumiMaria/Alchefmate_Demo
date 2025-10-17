import React from "react";
import line from "../assest/line.png";
import video from "../assest/Video.png";
const Demo = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="py-7">
          <div className="d-flex gap-3 demo">
            <h1 className="fs-8 text-green">Demo</h1>
            <div className="w-4 h-5">
              <img src={line} className="w-90" alt="" />
            </div>
            <p className="fs-7 mt-2 text-green">
              See how it works: your personalized <br /> meal planning journey
            </p>
          </div>
          <div className="w-95 py-5 ms-4 rounded-start-pill border-green border-end-0 d-sm-flex gap-3 my-5 ">
            <div className="w-70 demosec-1">
              <div className="w-90 ms-5 mt-4 py-2  border-green rounded-pill div1">
                <div className="w-95 m-4 border border-0 rounded-pill div2">
                  <img src={video} className="w-100" alt="" />
                </div>
              </div>
            </div>
            <div className="demosec-2">
              <p className="text-green fs-13 fw-medium mt-5">
                Every meal is a <br />
                chance to <br />
                nourish your <br /> body, inspire <br /> your mind, and
                <br /> feed your soul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
