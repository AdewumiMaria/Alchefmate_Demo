import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import line from "../assest/line.png";
import img1 from "../assest/recipe1.png";
import img2 from "../assest/recipe2.png";
import img3 from "../assest/recipe3.png";
import img4 from "../assest/Card.png";
const Recipes = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="py-6">
          <div className="d-flex gap-3 mt-3 recipe">
            <h2 className="text-green fs-9 mt-2">Recipes </h2>
            <div className="w-5">
              <img src={line} className="w-100" alt="" />
            </div>
            <p className="text-green fs-7 mt-2">
              Recipes crafted by AI, personalized to <br /> perfectly align with
              your unique dietary <br /> needs and flavor preferences
            </p>
          </div>
          <div className="d-md-flex gap-5 mt-5 recipesec">
            <div className="block recipesec-1">
              <div className="d-flex gap-4 border-green px-4 py-2 rounded-5 div1">
                <div className="div1-1">
                  <h3 className="text-green fs-2">
                    Savory Quinoa and Roasted <br /> Vegetable Bowl
                  </h3>
                  <button className="bg-lightgreen py-3 px-6 rounded-pill border-green fs-7 text-green fw-medium mt-4">
                    Learn more
                    <span className="ms-2">
                      <FaArrowRightLong />
                    </span>
                  </button>
                </div>
                <div className="w-30 div1-2">
                  <img src={img1} className="w-100" alt="" />
                </div>
              </div>
              <div className="d-flex gap-4 border-0 px-4 py-2 rounded-pill bg-lightgreen my-4 div2">
                <div className="w-30 div21">
                  <img src={img2} className="w-100" alt="" />
                </div>
                <div className="div22">
                  <h4 className="text-green fs-2 ">
                    Herb-Infused Grilled <br /> Chicken with Seasonal <br />
                    Greens
                  </h4>
                  <button className="text-green boder-green px-6 py-3 bg-transparent fs-7 rounded-pill fw-medium mt-2">
                    learn more
                    <span className="ms-2">
                      <FaArrowRightLong />
                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex bg-ash gap-4 border-0 px-4 py-2 rounded-5 div3">
                <div className="div3-1">
                  <h4 className="fs-2 text-green">
                    Mediterranean Lentil and <br /> Kale Salad
                  </h4>
                  <button className="text-green bg-lightgreen border-green px-6 py-3 rounded-pill fs-7 fw-medium mt-4">
                    learn more
                    <span className="ms-2">
                      <FaArrowRightLong />
                    </span>
                  </button>
                </div>
                <div className="w-30 div3-2">
                  <img src={img3} className="w-100" alt="" />
                </div>
              </div>
            </div>
            <div className="w-55 recipesec-2">
              <img src={img4} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
