import React from "react";
import line from "../assest/line.png";
import img1 from "../assest/testimonial1.png";
import img2 from "../assest/Testimonial2.png";
import img3 from "../assest/Testimonials3.png";
import img4 from "../assest/Testimonials4.png";
const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="py-5 testimonial">
          <div className="d-flex gap-3 testimonialsec-1">
            <h1 className="fs-8 text-green mt-2">Testimonials</h1>
            <div className="w-4">
              <img src={line} className="w-100" alt="" />
            </div>
            <p className="fs-7 text-green mt-2">
              Real stories from satisfied users: see <br /> how our platform
              changes lives
            </p>
          </div>
          <div className="d-md-flex gap-3 mt-5 testimonialsec-2">
            <div className="bg-ash py-5 px-4 rounded-4 div1">
              <p className="text-green fs-7">
                Since using AIChefMate,
                <br /> I've rediscovered my love <br /> for cooking! The meal
                <br /> plans are easy and <br />
                delicious. It's been a <br /> game-changer for my busy <br />
                lifestyle.
              </p>
              <span className="text-green fs-9 ms-10">"</span>
              <div className="w-100 d-flex gap-2 subdiv">
                <img src={img1} className="w-30" alt="" />
                <p className="text-green fs-7 fw-medium my-4 pt-2">Emily R.</p>
              </div>
            </div>
            <div className="bg-green py-5 px-4 rounded-4 div2">
              <p className="text-white fs-7">
                I never knew healthy <br /> eating could be this simple <br />
                and satisfying. Thanks to <br /> AIChefMate, my family <br />
                enjoys diverse, nutritious <br /> meals every day.
              </p>
              <span className="text-lightgreen fs-9 ms-10">"</span>
              <div className="w-100 d-flex gap-2 subdiv">
                <img src={img2} className="w-30" alt="" />
                <p className=" text-lightgreen fs-7 fw-medium my-4 pt-2">
                  Mark T.
                </p>
              </div>
            </div>
            <div className="bg-ash py-5 px-4 rounded-4 div3">
              <p className="text-green fs-7">
                The grocery savings have <br /> been incredible! Plus, every
                <br /> meal feels tailored just for <br /> me. I'm eating better
                <br /> feeling great. A big <br />
                thumbs up!
              </p>
              <span className="text-green fs-9 ms-10">"</span>
              <div className="w-100 d-flex gap-2 subdiv">
                <img src={img3} className="w-30" alt="" />
                <p className="fs-7 text-green fw-medium my-4 pt-2">Sarah J.</p>
              </div>
            </div>
            <div className="bg-ash py-5 px-4 rounded-4 div4">
              <p className="text-green fs-7">
                Switching to AIChefMate <br /> has been a revelation for <br />
                my meal prep routine. The <br /> AI-generated plans are <br />
                spot-on with my tastes <br /> and nutritional needs, <br />
                making healthy eating <br /> effortless and enjoyable.
              </p>
              <span className="fs-9 text-green ms-10">"</span>
              <div className="w-100 d-flex gap-2 subdiv">
                <img src={img4} className="w-30" alt="" />
                <p className="text-green fs-7 fw-medium my-4 pt-2">
                  Rebecca S.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
