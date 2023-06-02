import React from "react";
import { useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={`fixed ${
        visible ? "flex" : "hidden"
      } bg-white z-40 shadow shadow-slate-500 outline-none rounded-lg p-2 bottom-28 max-[700px]:right-3 right-20 cursor-pointer hover:opacity-70`}
      onClick={scrollToTop}
    >
      <IoArrowUp size={25} />
    </div>
  );
};

export default ScrollTop;
