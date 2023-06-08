import React, { useState } from "react";
import { ErrorWrapper } from "../../styles/pages/Error.styled";
import { useLocation } from "react-router-dom";

const Error = () => {
  const [view, setView] = useState(false);
  const path = useLocation();
  return (
    <ErrorWrapper className="flex flex-col gap-8 relative p-0 max-[700px]:w-full">
      <p className="text-center flex justify-center items-center text-red-500 font-sofia font-semibold text-2xl mt-5">
        An error occured
      </p>
      <div className="flex flex-col">
        <p className="text-xl text-justify font-sofia font-semibold">
          Connection to server failed
        </p>
        <p className="text-sm flex text-justify font-sofia gap-1 font-semibold">
          <span className="font-bold text-neutral-800">rauto.vercel.app</span>
          <span className="font-medium text-neutral-500">
            unexpectedly closed the connection.
          </span>
        </p>
      </div>
      <div className="flex justify-between relative max-[700px]:flex-col max-[700px]:gap-5 max-[700px]:w-full">
        <button
          className="bg-blue-500 text-white font-semibold p-1 w-20 max-[700px]:w-full outline-none border-none rounded-base text-sm cursor-pointer hover:opacity-70"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
        <button
          className="p-1 outline-none border border-black rounded-base pl-3 pr-3 max-[700px]:w-full font-semibold text-black text-sm cursor-pointer hover:opacity-70"
          onClick={() => setView(!view)}
        >
          {view ? "Hide Details" : "Details"}
        </button>
      </div>
      {view && (
        <div className="flex flex-col font-sofia text-justify max-[700px]:p-2">
          <p className="font-bold text-lg">Check your internet connection</p>
          <span className="text-sm text-neutral-500 font-normal">
            Check any cables and reboot any routers, modems, or other network
            devices you may be using.
          </span>
          <p className="font-bold text-lg">If you're connected</p>
          <span className="text-sm text-neutral-500 font-normal">
            if your internet is connected then check if you have an active data
            bundle this might be the issues.
          </span>
        </div>
      )}
    </ErrorWrapper>
  );
};

export default Error;
