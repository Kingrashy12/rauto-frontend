import React from "react";

const SimilarListing = ({ similar }) => {
  return (
    <div className="flex flex-col relative mt-2 bg-slate-200 w-56 rounded-lg shadow-lg cursor-pointer hover:shadow-black max-[700px]:w-36">
      <img src={similar?.pImage?.url} alt="" className="w-full rounded-t-lg" />
      <div className="flex flex-col p-3">
        <h2 className="text-base font-semibold font-sofia">{similar?.pname}</h2>
        <div className="text-neutral-400 border-b border-b-neutral-300"></div>
        <h3 className="font-semibold text-xl font-sofia mt-3 ">
          &#8358; {similar?.pPrice?.toLocaleString()}
        </h3>
      </div>
    </div>
  );
};

export default SimilarListing;
