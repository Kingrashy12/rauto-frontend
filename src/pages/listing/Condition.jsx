import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getConditionListing } from "../../hooks/ListingSlice";
import { BackPage, EmptyMsg, ListingFeed } from "../../components";
import { HeaderOne } from "../../libs";
import { BounceLoader } from "react-spinners";

const Condition = () => {
  const { condition } = useParams();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listing);
  const cap = condition.charAt(0).toUpperCase() + condition.slice(1);
  const isLoading = list.clStatus === "pending";
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    document.title = `${cap} Cars - RAuto`;
  });

  useEffect(() => {
    dispatch(getConditionListing(condition));
  }, [dispatch, condition]);

  useEffect(() => {
    if (!list.cl.length) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  });
  return (
    <div className="flex relative flex-col mt-16 gap-3 p-5 w-full">
      <BackPage />
      <HeaderOne
        fontSemibold
        fontSofia
        text={`${cap} Car's Listing`}
        className="text-3xl"
        isLoading={isLoading}
        loadingHeight={"40px"}
        loadingWidth={"200px"}
      />
      <div className="flex flex-wrap gap-3 w-full">
        {empty ? (
          <EmptyMsg name={`${condition} Cars`} />
        ) : isLoading ? (
          <div className="flex flex-col items-center justify-center w-full gap-3">
            <BounceLoader size={120} color="#000" />
            <p className="font-semibold font-sofia">
              Fetching all {cap} Car Listing
            </p>
          </div>
        ) : (
          list.cl.map((brand, index) => (
            <ListingFeed brand={brand} key={index} isLoading={isLoading} />
          ))
        )}
      </div>
    </div>
  );
};

export default Condition;
