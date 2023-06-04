import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useSearchParams } from "react-router-dom";
import RightSide from "../layout/RightSide";
import { FeedWrapper } from "../../styles/pages/PostFeed.styled";
// import { toast } from "react-toastify";
import { useGetAllListingsQuery } from "../../hooks/ListingApi";
// import { useSelector } from "react-redux";
import Error from "./Error";
import { BounceLoader } from "react-spinners";

const PostFeed = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const make = searchParams.get("make");
  const color = searchParams.get("color");
  const condition = searchParams.get("condition");
  const body = searchParams.get("body");
  const year = searchParams.get("year");
  const { data, error, isLoading } = useGetAllListingsQuery();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
    if (isLoading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, []);

  useEffect(() => {
    if (make) {
      document.title = `${make?.toUpperCase()} - RAuto`;
    }
    if (color) {
      document.title = `${color?.toLocaleUpperCase()} Cars - RAuto`;
    }
    if (condition) {
      document.title = `${condition?.toLocaleUpperCase()} Cars - RAuto`;
    }
    if (body) {
      document.title = `${body?.toLocaleUpperCase()}S - RAuto`;
    }
    if (year) {
      document.title = `${year?.toLocaleUpperCase()} Model - RAuto`;
    }
  });

  // if (slug !== searchParams) {
  //   return alert("Not Found");
  // }
  function setMake(make) {
    setSearchParams({ make });
  }
  function setColor(color) {
    setSearchParams({ color });
  }
  function setCond(condition) {
    setSearchParams({ condition });
  }
  function setBody(body) {
    setSearchParams({ body });
  }
  function setYear(year) {
    setSearchParams({ year });
  }

  return (
    <FeedWrapper className="w-full">
      <RightSide
        setMake={setMake}
        setColor={setColor}
        setCond={setCond}
        setBody={setBody}
        setYear={setYear}
        isLoading={isLoading}
      />
      <div
        className={`flex relative flex-wrap w-full gap-3 ${
          error && "self-center text-center justify-center /ml-16"
        } max-[350px]:mb-6 max-[700px]:justify-cente p-1 ml-1`}
      >
        {isLoading ? (
          <div className="flex gap-5 w-full relative items-center self-center justify-center">
            <BounceLoader size={150} />
          </div>
        ) : (
          <>
            {error && <Error />}
            {data
              ?.filter(
                (p) =>
                  !make | (p.pmake === make) ||
                  p.pcolor === color ||
                  p.pcondition === condition ||
                  p.pbody === body ||
                  p.pyear === year
              )
              .map((product, index) => (
                <div className="max-[350px]:mb-7" key={index}>
                  <PostItem product={product} loading={isLoading} />
                </div>
              ))}{" "}
          </>
        )}
      </div>
    </FeedWrapper>
  );
};

export default PostFeed;
