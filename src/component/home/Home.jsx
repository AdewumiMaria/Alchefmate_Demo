import React from "react";
import Navbar from "../common/Navbar";
import Banner from "./Banner";
import Demo from "./Demo";
import Work from "./Work";
import Benefit from "./Benefit";
import Recipes from "./Recipes";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Insight from "./Insight";
import Question from "./Question";
import Need from "./Need";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <section>
      <Navbar />
      <Banner />
      <Demo />
      <Work />
      <Benefit />
      <Recipes />
      <Testimonials />
      <Pricing />
      <Insight />
      <Question />
      <Need />
      <Footer />
    </section>
  );
};

export default Home;
