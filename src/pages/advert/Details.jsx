import React, { useEffect, useState } from "react";
// import { GT63S, STOI } from "../../asset";
import { ListingImg, StyledDetails } from "../../styles/pages/Detailed.styled";
import { CreatedUser } from "../../components";
import { toast } from "react-toastify";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../hooks/api";
import axios from "axios";
import SimilarListing from "./SimilarListing";
// import { BASE_URL } from "../../hooks/api";
// import { useParams } from "react-router-dom";
// import products from "../../product.json";

const Details = () => {
  const [sold, setSold] = useState(false);
  const [closed] = useState(false);
  const [product, setProduct] = useState({});
  const [similar, setSimilar] = useState([]);
  const { id } = useParams();

  async function getListing() {
    const fetchList = await axios.get(`${BASE_URL}/listing/${id}`, {
      // method: "GET",
      // headers: { "Content-Type": "application/json" },
    });
    const response = await fetchList.data;
    setProduct(response);
    // console.log(product);
  }

  const pmake = product.pmake;
  async function getSimilarListing() {
    const fetchList = await axios.get(
      `${BASE_URL}/listing/similar/${pmake}`
      // {
      //   method: "GET",
      //   headers: { "Content-Type": "application/json" },
      // }
    );
    const response = await fetchList.data;
    setSimilar(response);
    console.log("similar listing", similar);
  }

  useEffect(() => {
    getListing();
    getSimilarListing();
    // console.log(product);
  }, [product]);

  function Buy() {
    if (closed) {
      toast.info(`${product.pname} has been closed by user`, {
        position: "top-center",
      });
    } else if (sold) {
      toast.error(`${product.pname} has been Sold`, { position: "top-center" });
    } else {
      toast.success(
        `You Bought ${product.pname} for ${product.pPrice?.toLocaleString()} `,
        {
          position: "top-center",
        }
      );
      setSold(true);
    }
  }

  return (
    <StyledDetails className="mt-14 max-[800px]:mt-5">
      <div className="flex justify-evenly relative gap-16 max-[800px]:flex-col">
        <ListingImg
          src={product?.pImage?.url}
          className="rounded-lg cursor-pointer"
          alt=""
        />
        {product?.sold && (
          <div className="absolute bg-transparent text-white p-1 w-56 items-center text-center font-semibold border-dotted border-4 border-red-500">
            <p className="text-lg p-1 border-red-500 border-dotted border-4 text-red-500 font-semibold">
              Sold
            </p>
          </div>
        )}
        {product?.closed && (
          <div className="absolute bg-transparent text-white p-1 w-56 items-center text-center font-semibold border-dotted border-4 border-blue-600">
            <p className="text-lg p-1 border-blue-600 border-dotted border-4 text-blue-600 font-semibold">
              Closed
            </p>
          </div>
        )}
        <div className="flex flex-col w-96 max-[800px]:p-3 max-[375px]:p-6 max-[350px]:w-full max-[350px]:p-4 max-[370px]:w-full">
          <h1 className="font-extrabold text-3xl font-sofia max-[700px]:text-2xl">
            {product.pname}
          </h1>
          <h3 className="text-3xl font-sofia font-bold mb-1">
            &#8358; {product.pPrice?.toLocaleString()}
          </h3>
          <hr className="mb-2 text-gray-600" />
          <div className="flex gap-3">
            <div className="flex flex-col">
              {/* <span className="font-sofia text-gray-400 bg-slate-200 p-xs-s mb-3 text-sm">
                Model
              </span> */}
              <span className="font-sofia text-gray-400 bg-slate-200 p-xs-s mb-3 text-sm">
                Color
              </span>
              <span className="font-sofia text-gray-400 bg-slate-200 p-xs-s mb-3 text-sm">
                Make
              </span>
              <span className="font-sofia text-gray-400 bg-slate-200 p-xs-s mb-3 text-sm">
                Body
              </span>
              <span className="font-sofia text-gray-400 bg-slate-200 p-xs-s mb-3 text-sm">
                Year
              </span>
            </div>
            <div className="flex flex-col">
              {/* <span className="font-sofia text-black bg-slate-200 p-xs-s mb-3 text-sm rounded-sm">
                {product.model}
              </span> */}
              <span className="font-sofia text-black bg-slate-200 p-xs-s mb-3 text-sm rounded-sm">
                {product.pcolor}{" "}
              </span>
              <span className="font-sofia text-black bg-slate-200 p-xs-s mb-3 text-sm rounded-sm">
                {product.pmake?.toUpperCase()}{" "}
              </span>
              <span className="font-sofia text-black bg-slate-200 p-xs-s mb-3 text-sm rounded-sm">
                {product.pbody}
              </span>
              <span className="font-sofia text-black bg-slate-200 p-xs-s mb-3 text-sm rounded-sm">
                {product.pyear}
              </span>
            </div>
          </div>
          <hr />
          <span className="text-black text-base font-semibold font-share">
            Description:
          </span>
          <p className="text-lg text-black font-semibold mb-1">
            {product.pdesc}
          </p>
          <hr />
          <button
            className="bg-black text-white mt-2 mb-2 cursor-pointer hover:bg-transparent hover:text-black border-2 border-black p-2 rounded-lg font-semibold"
            onClick={Buy}
          >
            Buy at asking price
          </button>
          <hr />
          <CreatedUser
            user={product.name}
            userProfile={product.userProfile}
            followers={product.followers || 0}
            userAd={product.ad || null}
            username={product.username}
          />
        </div>
      </div>
      <div className="flex relative flex-col p-6 mt-2 max-[700px]:p-2">
        <h2 className="text-3xl font-bold font-sofia max-[800px]:text-2xl max-[700px]:text-base">
          Similar {product.pmake?.toUpperCase()} Listing
        </h2>
        <SimilarListing similar={similar} />
      </div>
    </StyledDetails>
  );
};

export default Details;
