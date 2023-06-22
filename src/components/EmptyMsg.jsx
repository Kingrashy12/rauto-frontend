import React from "react";
import { HeaderOne } from "../libs";
import { TbFaceIdError } from "react-icons/tb";

const EmptyMsg = ({ name }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <TbFaceIdError className="text-7xl" />
      <HeaderOne fontSemibold fontSofia text="404" className="text-[4rem]" />
      <p className="font-semibold font-sofia">No Listing found for {name}</p>
    </div>
  );
};

export default EmptyMsg;
