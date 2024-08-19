import React from "react";
import Hero from "./HomeComponents/Hero";
import Promotions from "./HomeComponents/Promotions";
import NewArrivals from "./HomeComponents/NewArrivals";
import Counter from "./HomeComponents/Counter";
import BestSellers from "./HomeComponents/BestSellers";
import Features from "./HomeComponents/Features";

const Home = () => {
  return (
    <div>
      <Hero />
      <Promotions />
      <NewArrivals />
      <Counter />
      <BestSellers />
      <Features />
    </div>
  );
};

export default Home;
