import React from "react";
import { SimilarWrapper } from "../../styles/pages/Similar.styled";
import { useNavigate } from "react-router-dom";

const SimilarListing = ({ similar }) => {
  const navigate = useNavigate();
  return (
    <SimilarWrapper className="w-full">
      {similar.map((list) => (
        <div
          className="flex flex-col ml-5 max-[700px]:ml-2 relative mt-2 bg-slate-200 w-56 rounded-lg max-[700px]:rounded-md shadow-lg cursor-pointer hover:shadow-black max-[700px]:w-44 max-[415px]:w-46 max-[390px]:w-42 max-[375px]:w-40 max-[350px]:w-36"
          onClick={() => navigate(`/ad/${list._id}`)}
        >
          {/* <> */}
          <img
            src={list?.pImage?.url}
            alt=""
            className="w-full rounded-t-lg max-[700px]:rounded-t-md"
          />
          <div className="flex flex-col p-3">
            <h2 className="text-base font-semibold font-sofia">
              {list?.pname}
            </h2>
            <div className="text-neutral-400 border-b border-b-neutral-300"></div>
            <h3 className="font-semibold text-xl font-sofia mt-3 ">
              &#8358; {list?.pPrice?.toLocaleString()}
            </h3>
          </div>
          {/* </> */}
        </div>
      ))}
    </SimilarWrapper>
  );
};

export default SimilarListing;
