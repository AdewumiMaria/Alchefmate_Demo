import React from "react";
import line from "../assest/line.png";
import img1 from "../assest/ban-img3.png";
import img2 from "../assest/ban-img1.png";
const Benefit = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div>
          <div className="d-flex gap-3 mt-5 benefit">
            <h1 className="text-green fs-9">Benefits</h1>
            <div className="w-4 h-5">
              <img src={line} className="w-90" alt="" />
            </div>
            <p className="text-green fs-7">
              Get meal plans tailored to your unique <br /> dietary needs,
              preferences, and goals,
              <br /> ensuring a balanced and enjoyable diet.
            </p>
          </div>
          <div className="d-sm-flex gap-3 mt-3 benefitsec-1">
            <div className="bg-lightgreen px-4 py-7  rounded-pill div1">
              <h3 className="text-green fs-11 mt-3">
                Personalizes <br /> Nutrition
              </h3>
              <p className="fs-5 text-green">
                Get meal plans tailored to <br /> your unique dietary needs,
                <br />
                preferences, and <br /> goals, ensuring a balanced and <br />
                enjoyable diet.
              </p>
            </div>
            <div className=" w-30 h-60 div2">
              <img src={img1} className="w-100 h-100 rounded-pill" alt="" />
            </div>
            <div className="px-3 py-6 div3">
              <h3 className="fs-11 text-green ">
                Time-Saving <br /> Convenience
              </h3>
              <p className="fs-5 text-green">
                Say goodbye to meal <br /> planning stress. Our AI <br />
                -driven platform simplifies <br /> your weekly meal <br />
                preparation, saving you <br /> valuable time.
              </p>
            </div>
            <div className="bg-ash px-4 py-7 rounded-pill div4">
              <h3 className="fs-11 text-green mt-4">
                Healthier Eating <br /> Habits
              </h3>
              <p className="fs-5 text-green">
                Easily adopt a healthier <br /> lifestyle with nutrient-rich
                <br /> meal plans and <br /> educational content on <br />
                nutrition and wellness.
              </p>
            </div>
          </div>

          <div className="d-sm-flex gap-3 benefitsec-2">
            <div className="px-3 py-5 div1">
              <h3 className="text-green fs-11">
                Cost-Effective <br /> Shopping
              </h3>
              <p className="text-green fs-5">
                Reduce food waste and <br /> save money with efficient <br />
                grocery shopping lists that <br /> align perfectly with your
                <br /> meal plans.
              </p>
            </div>
            <div className="px-3 py-5 div2">
              <h3 className="text-green fs-11">
                Seamless <br /> Grocery Delivery
              </h3>
              <p className="fs-5 text-green">
                Enjoy the convenience of <br /> having all your meal <br />
                ingredients delivered right <br /> to your doorstep through
                <br /> our local grocery store <br /> partnerships.
              </p>
            </div>
            <div className="px-4 py-7 bg-green rounded-pill div3">
              <h3 className="text-lightgreen fs-11">
                Community <br /> Support
              </h3>
              <p className=" text-beige fs-5">
                Join a community of like <br />
                -minded individuals, share <br /> experiences, recipes, and
                <br />
                tips, and get motivated on <br /> your journey to healthier
                <br />
                eating.
              </p>
            </div>
            <div className="w-25 div4">
              <img src={img2} className="w-100 rounded-circle mt-5" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
