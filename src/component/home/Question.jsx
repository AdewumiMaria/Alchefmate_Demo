import React, { useState } from "react";
import line from "../assest/line.png";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
const Question = () => {
  const [showText, setShowtext] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const hideText = "";

  const [seeText, setSeeText] = useState(false);
  const [change, setChange] = useState("#ffffff");

  const [displayText, setDisplaytext] = useState(false);
  const [colour, setColour] = useState("#ffffff");

  const [triggerText, setTriggertext] = useState(false);
  const [switchColor, setSwitchcolor] = useState("#ffffff");

  const [viewText, setViewtext] = useState(false);
  const [changeColor, setChangecolor] = useState("#ffffff");

  const [unhideText, setUnhidetext] = useState(false);
  const [style, setStyle] = useState("#ffffff");

  const [reveilText, setReveiltext] = useState(false);
  const [backgroundColor, setBackgroundcolor] = useState("#ffffff");

  const [openText, setOpentext] = useState(false);
  const [backgroundColour, setBackgroundcolour] = useState("#ffffff");

  const Display = () => {
    setShowtext(!showText);
    setColor(color === "#ffffff" ? "#f1f2ed" : "#ffffff");
  };
  const See = () => {
    setSeeText(!seeText);
    setChange(change === "#ffffff" ? "#f1f2ed" : "#ffffff");
  };
  const Show = () => {
    setDisplaytext(!displayText);
    setColour(colour === "#ffffff" ? "#f1f2ed" : "#ffffff");
  };
  const Trigger = () => {
    setTriggertext(!triggerText);
    setSwitchcolor(switchColor === "#ffffff" ? "#f1f2ed" : "#ffffff");
  };
  const View = () => {
    setViewtext(!viewText);
    setChangecolor(changeColor === "#ffffff" ? "#f1f2ed" : "#ffffff");
  };
  const Unhide = () => {
    setUnhidetext(!unhideText);
    setStyle(style === "#ffffff" ? "#f1f2ed" : "#ffffff");
  };
  const Reveil = () => {
    setReveiltext(!reveilText);
    setBackgroundcolor(backgroundColor === "#ffffff" ? "#f1f2ed" : "#ffffff");
  };
  const Open = () => {
    setOpentext(!openText);
    setBackgroundcolour(backgroundColour === "#ffffff" ? "#f1f2ed" : "#ffffff");
  };
  return (
    <section className="bg-white ">
      <div className="container">
        <div className="py-6">
          <div className=" d-flex gap-3 question">
            <h1 className="text-green fs-9 mt-2">Frequently Asked Questions</h1>
            <div className="w-4">
              <img src={line} className="w-100" alt="" />
            </div>
            <p className="text-green fs-7 mt-2">
              Meal planning made easy: your <br /> questions, answered
            </p>
          </div>
          <div>
            <div className="d-sm-flex gap-4 mt-5 questionsec-1">
              <div
                className="bg-white px-3 pt-2 rounded-5 div1"
                onClick={Display}
              >
                <div className="d-flex gap-3 my-2">
                  <button className="p-3 my-2 rounded-circle border-green text-green bg-transparent fs-7">
                    {showText ? <FaArrowDownLong /> : <FaArrowUp />}
                  </button>
                  <p className="text-green fs-7 mt-2 fw-bold">
                    How does the AI create personalized meal plans?
                  </p>
                </div>
                {showText ? (
                  <div>
                    <p className="text-green fs-7 ms-6">
                      Our AI system analyzes your dietary preferences, <br />
                      health goals, and budget to curate meal plans that are
                      <br /> unique to you. It continually learns from your
                      <br />
                      time.
                    </p>
                  </div>
                ) : (
                  hideText
                )}
              </div>
              <div className="bg-white px-4 pt-2 rounded-5 div2" onClick={See}>
                <div className="d-flex gap-3 mb-2">
                  <button className="px-3 my-3 rounded-circle border-green text-green bg-transparent fs-7">
                    {seeText ? <FaArrowDownLong /> : <FaArrowUp />}
                  </button>
                  <p className="text-green fs-7 fw-bold mt-2">
                    Can I integrate special dietary requirements into my meal
                    plan?
                  </p>
                </div>
                {seeText ? (
                  <div>
                    <p className="fs-7 text-green ms-6">
                      Absolutely! Our platform is designed to accommodate <br />
                      a range of dietary needs, including vegetarian, vegan,
                      <br /> gluten-free, and keto options. Just specify your
                      <br />
                      requirements in your profile, and your meal plans will
                      <br />
                      be adjusted accordingly.
                    </p>
                  </div>
                ) : (
                  hideText
                )}
              </div>
            </div>
            <div className="questionsec-2">
              <div className="d-sm-flex gap-4 mt-3 div1">
                <div
                  className="bg-white px-4 pt-2 rounded-5 div1-1"
                  onClick={Show}
                >
                  <div className="d-flex gap-4 my-3">
                    <button className="px-3 rounded-circle border-green text-green bg-transparent fs-7">
                      {displayText ? <FaArrowDownLong /> : <FaArrowUp />}
                    </button>
                    <p className="text-green fs-5 mt-3 fw-bold">
                      How does the grocery delivery service work?
                    </p>
                  </div>
                  {displayText ? (
                    <div>
                      <p className="fs-7 text-green ms-6">
                        Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Voluptatum distinctio, <br />
                        reprehenderit vero, blanditiis nostrum <br /> eaque
                        labore tenetur, itaque necessitatibus <br /> maiores
                        dolorum unde odit nihil dicta?
                      </p>
                    </div>
                  ) : (
                    hideText
                  )}
                </div>
                <div
                  className="bg-white px-4 pt-2 rounded-5 div1-2"
                  onClick={Trigger}
                >
                  <div className="d-flex gap-3 my-2">
                    <button className="px-3 my-3 rounded-circle border-green text-green bg-transparent fs-7">
                      {triggerText ? <FaArrowDownLong /> : <FaArrowUp />}
                    </button>
                    <p className="text-green fs-7 mt-2 fw-bold">
                      How does the platform accommodate allergies and food
                      sensitivities?
                    </p>
                  </div>
                  {triggerText ? (
                    <div>
                      <p className="fs-7 text-green ms-6">
                        Lorem ipsum dolor sit amet consectetur <br />{" "}
                        adipisicing elit. Voluptatum distinctio, <br />{" "}
                        reprehenderit vero, blanditiis nostrum <br /> eaque
                        labore tenetur, itaque necessitatibus <br /> maiores
                        dolorum unde odit nihil dicta?
                      </p>
                    </div>
                  ) : (
                    hideText
                  )}
                </div>
              </div>
              <div className="d-sm-flex gap-4 mt-3 div2">
                <div
                  className="bg-white px-4 pt-2 rounded-5 div2-1"
                  onClick={View}
                >
                  <div className="d-flex gap-3 my-3">
                    <button className="px-3 rounded-circle border-green text-green bg-transparent fs-7">
                      {viewText ? <FaArrowDownLong /> : <FaArrowUp />}
                    </button>
                    <p className="text-green fs-7 fw-bold mt-3">
                      Are there options for budget-conscious users?
                    </p>
                  </div>
                  {viewText ? (
                    <div>
                      <p className="fs-7 text-green ms-6">
                        Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Voluptatum distinctio, <br />
                        reprehenderit vero, blanditiis nostrum <br /> eaque
                        labore tenetur, itaque necessitatibus <br /> maiores
                        dolorum unde odit nihil dicta?
                      </p>
                    </div>
                  ) : (
                    hideText
                  )}
                </div>
                <div
                  className="bg-white px-5 pt-2 rounded-5 div2-2"
                  onClick={Unhide}
                >
                  <div className="d-flex gap-3 my-3">
                    <button className="px-3 my-3 rounded-circle border-green text-green bg-transparent fs-7">
                      {unhideText ? <FaArrowDownLong /> : <FaArrowUp />}
                    </button>
                    <p className="text-green fs-7 fw-bold mt-2">
                      Can I adjust my meal plans after they've been created?
                    </p>
                  </div>
                  {unhideText ? (
                    <div>
                      <p className="text-green fs-7">
                        Lorem ipsum dolor sit amet consectetur <br />{" "}
                        adipisicing elit. Voluptatum distinctio, <br />{" "}
                        reprehenderit vero, blanditiis nostrum <br /> eaque
                        labore tenetur, itaque necessitatibus <br /> maiores
                        dolorum unde odit nihil dicta?
                      </p>
                    </div>
                  ) : (
                    hideText
                  )}
                </div>
              </div>
              <div className="d-sm-flex gap-4 mt-3 div3">
                <div
                  className="bg-white px-4 pt-2 rounded-5 div3-1"
                  onClick={Reveil}
                >
                  <div className="d-flex gap-3 my-2">
                    <button className="px-3 my-3 rounded-circle border-green text-green bg-transparent fs-7">
                      {reveilText ? <FaArrowDownLong /> : <FaArrowUp />}
                    </button>
                    <p className="text-green fs-7 fw-bold mt-2">
                      How can I access nutrition education and healthy <br />
                      eating tips?
                    </p>
                  </div>
                  {reveilText ? (
                    <div>
                      <p className="text-green fs-7">
                        Lorem ipsum dolor sit amet consectetur <br />{" "}
                        adipisicing elit. Voluptatum distinctio, <br />{" "}
                        reprehenderit vero, blanditiis nostrum <br /> eaque
                        labore tenetur, itaque necessitatibus <br /> maiores
                        dolorum unde odit nihil dicta?
                      </p>
                    </div>
                  ) : (
                    hideText
                  )}
                </div>
                <div
                  className="bg-white px-4 pt-2 rounded-5 div3-2"
                  onClick={Open}
                >
                  <div className="d-flex gap-3 my-3">
                    <button className="px-3 my-3 rounded-circle border-green text-green bg-transparent fs-7">
                      {openText ? <FaArrowDownLong /> : <FaArrowUp />}
                    </button>
                    <p className="fs-7 fw-bold mt-2 text-green">
                      What makes your AI-driven meal planning <br /> different
                      from other meal planning services?
                    </p>
                  </div>
                  {openText ? (
                    <div>
                      <p className="text-green fs-7">
                        Lorem ipsum dolor sit amet consectetur <br />{" "}
                        adipisicing elit. Voluptatum distinctio, <br />{" "}
                        reprehenderit vero, blanditiis nostrum <br /> eaque
                        labore tenetur, itaque necessitatibus <br /> maiores
                        dolorum unde odit nihil dicta?
                      </p>
                    </div>
                  ) : (
                    hideText
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
