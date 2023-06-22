import React from "react";

const FooterNav = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex justify-between flex-wrap max-[700px]:justify-evenly w-full relative">
      <span className="font-semibold font-sofia text-sm max-[700px]:order-2">
        &copy; 2023 RAuto. All right reserved May -
        {months[new Date().getMonth()]} {""}
        {new Date().getFullYear()}
      </span>
      <span className="font-semibold font-sofia text-sm hover:underline">
        <a href="">Privacy & Policy</a>
      </span>
      <span className="font-semibold font-sofia text-sm hover:underline">
        <a href="">Terms & Condition</a>
      </span>
    </div>
  );
};

export default FooterNav;
