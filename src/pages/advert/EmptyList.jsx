import React from "react";
import { EmptyListWrapper } from "../../styles/pages/empty.styled";
import { MdOutlineWifiTetheringError } from "react-icons/md";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const EmptyList = () => {
  const [trying, setTrying] = useState(false);
  function tryAgan() {
    setTrying(true);
    setTimeout(() => {
      window.location.reload();
      setTrying(false);
    }, 3000);
  }
  return (
    <EmptyListWrapper>
      <p>
        {trying ? (
          <AiOutlineLoading3Quarters className="text-8xl text-blue-500 tryloader max-[700px]:text-7xl" />
        ) : (
          <MdOutlineWifiTetheringError className="text-8xl text-red-500 max-[700px]:text-7xl" />
        )}
      </p>
      <h2 className="text-2xl font-semibold nload max-[700px]:text-lg">
        {trying ? "Loading..." : "Network Error"}
      </h2>
      <button
        className="bg-black p-2 rounded-md flex items-center justify-center mt-5 max-[700px]:p-1 max-[700px]:w-24 w-28 font-semibold font-sofia text-white cursor-pointer"
        onClick={tryAgan}
      >
        {trying ? <FiLoader className="tryloader" /> : "Retry"}
      </button>
    </EmptyListWrapper>
  );
};

export default EmptyList;
