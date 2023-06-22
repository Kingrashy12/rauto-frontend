import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BackPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-1 items-center cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <HiArrowSmLeft />
      <p className="text-balck font-semibold font-sofia">Back</p>
    </div>
  );
};

export default BackPage;
