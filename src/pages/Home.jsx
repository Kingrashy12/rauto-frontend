import React, { useEffect } from "react";
import {
  BrandSection,
  FindFitSection,
  HeroHeader,
  HeroSection,
  ShopSection,
} from "../components";

const Home = () => {
  useEffect(() => {
    document.title = "Home - RAuto";
  });
  return (
    <div className="flex flex-col mt-0 p-0 bg-white">
      <div className="bg-black">
        <HeroSection />
      </div>
      <HeroHeader />
      <BrandSection />
      <hr />
      <FindFitSection />
      <ShopSection />
    </div>
  );
};

export default Home;
