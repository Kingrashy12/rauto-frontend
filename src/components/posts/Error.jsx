import React, { useState } from "react";

const Error = () => {
  const [view, setView] = useState(false);
  return (
    <div className="flex flex-col justify-between gap-16 relative">
      <p className="text-center flex justify-center items-center text-red-500 font-sofia font-semibold text-2xl mt-5">
        An error occured
      </p>
      <div className="flex gap-20 relative max-[700px]:flex-col max-[700px]:w-full">
        <button
          className="bg-blue-500 text-white font-semibold p-1 w-20 outline-none border-none rounded-base text-sm cursor-pointer hover:opacity-70"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
        <button
          className="p-1 outline-none border border-black rounded-base pl-3 pr-3 font-semibold text-black text-sm cursor-pointer hover:opacity-70"
          onClick={() => setView(!view)}
        >
          {view ? "Hide Details" : "Details"}
        </button>
      </div>
    </div>
  );
};

export default Error;
