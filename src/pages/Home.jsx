import React, { useEffect } from "react";
import {
  AboutSection,
  BrandSection,
  HeroHeader,
  HeroSection,
} from "../components";

const Home = () => {
  useEffect(() => {
    document.title = "Home - RAuto";
  });
  return (
    <div className="flex flex-col mt-0 p-0 bg-white">
      <HeroSection />
      <HeroHeader />
      <BrandSection />
      {/* <AboutSection /> */}
    </div>
  );
};

export default Home;
