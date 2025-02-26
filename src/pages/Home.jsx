import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Banner1 from "../components/Banners/Banner1";
import NewProducts from "../components/NewProducts/NewProducts";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="pt-20 text-black"
      >
        <Hero />
        <Features />
        <Banner1 />
        <NewProducts />
        <Newsletter />
    </div>
  );
};

export default Home;
