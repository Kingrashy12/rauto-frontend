import React from "react";
import { SimilarWrapper } from "../../styles/pages/Similar.styled";
import { Link, useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

const SimilarListing = ({ similar, isLoading, currentId }) => {
  const navigate = useNavigate();

  return (
    <SimilarWrapper className="w-full">
      {similar
        .filter((p) => p._id !== currentId)
        .map((list) => (
          <div
            className="flex z-0 flex-col ml-5 max-[700px]:ml-2 relative mt-2 bg-slate-200 w-56 rounded-lg max-[700px]:rounded-md shadow-lg cursor-pointer hover:shadow-black max-[700px]:w-44 max-[415px]:w-46 max-[390px]:w-42 max-[375px]:w-40 max-[350px]:w-36"
            // onClick={() => navigate(`/listing/${list._id}`)}
          >
            <Link to={`/listing/${list._id}`} target="_blank">
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  width={`100%`}
                  height={`80px`}
                />
              ) : (
                <img
                  src={list?.pImage?.url}
                  alt=""
                  className="w-full rounded-t-lg max-[700px]:rounded-t-md"
                />
              )}

              <div className="flex flex-col p-3">
                {isLoading ? (
                  <Skeleton variant="text" width={`80px`} height={`25px`} />
                ) : (
                  <h2 className="text-base font-semibold font-sofia">
                    {list?.pname}
                  </h2>
                )}
                <div className="text-neutral-400 border-b border-b-neutral-300"></div>
                {isLoading ? (
                  <Skeleton variant="text" width={`100px`} height={`40px`} />
                ) : (
                  <h3 className="font-semibold text-xl font-sofia mt-3 ">
                    &#8358; {list?.pPrice?.toLocaleString()}
                  </h3>
                )}
              </div>
            </Link>
          </div>
        ))}
    </SimilarWrapper>
  );
};

export default SimilarListing;
