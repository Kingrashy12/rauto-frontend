import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBrandMake } from "../../hooks/ListingSlice";
import { HeaderOne } from "../../libs";
import { BackPage, ListingFeed } from "../../components";
import { BounceLoader } from "react-spinners";

const Make = () => {
  const { make } = useParams();
  const dispatch = useDispatch();
  const brandmake = useSelector((state) => state.listing);
  const isLoading = brandmake.makeStatus === "pending";
  const cap = make.charAt(0).toUpperCase() + make.slice(1);

  useEffect(() => {
    dispatch(getBrandMake(make));
  }, [dispatch]);

  useEffect(() => {
    document.title = `All ${cap} Listing - RAuto`;
  });
  return (
    <div className="flex relative flex-col mt-16 gap-3 p-5 w-full">
      <BackPage />
      <HeaderOne
        fontSemibold
        fontSofia
        text={`All ${cap} Listing`}
        className="text-3xl"
        isLoading={isLoading}
        loadingHeight={"40px"}
        loadingWidth={"200px"}
      />
      <div className="flex flex-wrap gap-3 w-full">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center w-full gap-3">
            <BounceLoader size={120} color="#000" />
            <p className="font-semibold font-sofia">
              Fetching all {make} Listing
            </p>
          </div>
        ) : (
          brandmake.make.map((brand, index) => (
            <ListingFeed brand={brand} key={index} isLoading={isLoading} />
          ))
        )}
      </div>
    </div>
  );
};

export default Make;
