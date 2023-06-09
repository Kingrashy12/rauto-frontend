import React, { useCallback, useEffect, useState } from "react";
import { ListingImg, StyledDetails } from "../../styles/pages/Detailed.styled";
import { CreatedUser } from "../../components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../hooks/api";
import axios from "axios";
import SimilarListing from "./SimilarListing";
import { Backdrop, Skeleton } from "@mui/material";
import Feedback from "./Feedback";
import { Male } from "../../asset";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import { removeItem, saveItem } from "../../hooks/saveSlice";

const Details = () => {
  const [sold, setSold] = useState(false);
  const [closed] = useState(false);
  const [product, setProduct] = useState({});
  const [similar, setSimilar] = useState([]);
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [Unsaved, setUnSaved] = useState(false);
  const [sLoading, setSLoading] = useState(false);
  const dispatch = useDispatch();
  const sItem = useSelector((state) => state.saved.saved);
  const auth = useSelector((state) => state.auth);

  function feed() {
    if (!auth._id) {
      navigate("/login");
    } else {
      setOpen(true);
    }
  }

  function del() {
    setSaved(false);
    toast.info(`You removed ${product?.pname}`);
    dispatch(removeItem(product?._id));
  }

  function add() {
    setSaved(true);
    toast.success(`You saved ${product?.pname}`);
    dispatch(saveItem(product));
  }

  const getListing = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchList = await axios.get(`${BASE_URL}/listing/${id}`);
      const response = await fetchList.data;
      setProduct(response);
      console.log("product:", product);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const pmake = product.pmake;
  const getSimilarListing = useCallback(async () => {
    setSLoading(true);
    try {
      const fetchList = await axios.get(`${BASE_URL}/listing/similar/${pmake}`);
      const response = await fetchList?.data;
      setSimilar(response);
      console.log("similar listing", similar);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setSLoading(false);
    }
  }, [pmake]);

  useEffect(() => {
    document.title = `${product?.pname} - RAuto`;
  });

  useEffect(() => {
    if (product.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getSimilarListing();
    getListing();
  }, [getListing, getSimilarListing]);

  function Buy() {
    if (closed) {
      toast.info(`${product?.pname} has been closed by user`, {
        position: "top-center",
      });
    } else if (sold) {
      toast.error(`${product?.pname} has been Sold`, {
        position: "top-center",
      });
    } else {
      toast.success(
        `You Bought ${product?.pname} for ${product.pPrice?.toLocaleString()} `,
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
        {isLoading ? (
          <Skeleton
            variant="text"
            width={`50rem`}
            className="max-[700px]:h-96"
          />
        ) : (
          <ListingImg
            src={product?.pImage?.url}
            className="rounded-lg cursor-pointer"
            alt=""
          />
        )}
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
          {isLoading ? (
            <Skeleton variant="text" width={`200px`} height={`60px`} />
          ) : (
            <h1 className="font-extrabold text-3xl font-sofia max-[700px]:text-2xl">
              {product?.pname}
            </h1>
          )}
          <div className="flex justify-between relative">
            {isLoading ? (
              <Skeleton varaint="text" width={`100px`} height={`50px`} />
            ) : (
              <h3 className="text-3xl font-sofia font-bold mb-1">
                &#8358; {product?.pPrice?.toLocaleString()}
              </h3>
            )}
            {isLoading ? (
              <Skeleton varaint="text" width={`80px`} height={`50px`} />
            ) : (
              <>
                {saved ? (
                  <p onClick={del}>
                    <BsFillBookmarkCheckFill
                      size={35}
                      className="bg-white p-2 rounded-lg absolute  cursor-pointer max-[700px]:rounded-sm max-[700px]:p-1"
                    />
                  </p>
                ) : (
                  <p onClick={add}>
                    <BsBookmark
                      size={35}
                      className="bg-white p-2 rounded-lg absolute cursor-pointer max-[700px]:rounded-sm max-[700px]:p-1"
                    />
                  </p>
                )}
              </>
            )}
          </div>
          <hr className="mb-2 text-gray-600" />
          <div className="flex gap-3">
            <div className="flex flex-col">
              {/* <span className="font-sofia text-gray-400 bg-slate-200 p-xs-s mb-3 text-sm">
                Model
              </span> */}
              {isLoading ? (
                <Skeleton variant="text" width={`80px`} height={`40px`} />
              ) : (
                <span className="font-sofia text-gray-400 bg-slate-200 p-xs-s mb-3 text-sm">
                  Color
                </span>
              )}
              {isLoading ? (
                <Skeleton variant="text" width={`80px`} height={`40px`} />
              ) : (
                <span className="font-sofia text-gray-400 bg-slate-200 p-xs-s mb-3 text-sm">
                  Make
                </span>
              )}
              {isLoading ? (
                <Skeleton variant="text" width={`80px`} height={`40px`} />
              ) : (
                <span className="font-sofia text-gray-400 bg-slate-200 p-xs-s mb-3 text-sm">
                  Body
                </span>
              )}
              {isLoading ? (
                <Skeleton variant="text" width={`80px`} height={`40px`} />
              ) : (
                <span className="font-sofia text-gray-400 bg-slate-200 p-xs-s mb-3 text-sm">
                  Year
                </span>
              )}
            </div>
            <div className="flex flex-col">
              {/* <span className="font-sofia text-black bg-slate-200 p-xs-s mb-3 text-sm rounded-sm">
                {product.model}
              </span> */}
              {isLoading ? (
                <Skeleton variant="text" width={`80px`} height={`40px`} />
              ) : (
                <span className="font-sofia text-black bg-slate-200 p-xs-s mb-3 text-sm rounded-sm">
                  {product?.pcolor}{" "}
                </span>
              )}
              {isLoading ? (
                <Skeleton variant="text" width={`80px`} height={`40px`} />
              ) : (
                <span className="font-sofia text-black bg-slate-200 p-xs-s mb-3 text-sm rounded-sm">
                  {product?.pmake?.toUpperCase()}{" "}
                </span>
              )}
              {isLoading ? (
                <Skeleton variant="text" width={`80px`} height={`40px`} />
              ) : (
                <span className="font-sofia text-black bg-slate-200 p-xs-s mb-3 text-sm rounded-sm">
                  {product?.pbody}
                </span>
              )}
              {isLoading ? (
                <Skeleton variant="text" width={`80px`} height={`40px`} />
              ) : (
                <span className="font-sofia text-black bg-slate-200 p-xs-s mb-3 text-sm rounded-sm">
                  {product?.pyear}
                </span>
              )}
            </div>
          </div>
          <hr />
          {isLoading ? (
            <Skeleton variant="text" width={`150px`} height={`30px`} />
          ) : (
            <span className="text-black text-base font-semibold font-share">
              Description:
            </span>
          )}
          {isLoading ? (
            <Skeleton variant="text" width={`100%`} height={`80px`} />
          ) : (
            <p className="text-lg text-black font-semibold mb-1">
              {product?.pdesc}
            </p>
          )}
          <hr />
          {isLoading ? (
            <Skeleton variant="text" width={`100%`} height={`50px`} />
          ) : (
            <button
              className="bg-black text-white mt-2 mb-2 cursor-pointer hover:bg-transparent hover:text-black border-2 border-black p-2 rounded-lg font-semibold"
              onClick={Buy}
            >
              Buy at asking price
            </button>
          )}
          <hr />
          <CreatedUser
            user={product?.name}
            userProfile={product?.userProfile || Male}
            followers={product?.followers || 0}
            userAd={product?.ad || null}
            username={product?.username}
            isLoading={isLoading}
          />
          {isLoading ? (
            <Skeleton variant="text" width={`100%`} height={`50px`} />
          ) : (
            <button
              className="bg-black text-white p-2 rounded-lg mt-2 cursor-pointer hover:opacity-70"
              onClick={feed}
            >
              {product?.comment?.length} FeedBack
            </button>
          )}
          {open && (
            <Backdrop open={open} className="relative z-z-70">
              <div className="fixed w-full h-full flex items-center justify-center z-z-70">
                <Feedback open={open} setOpen={setOpen} item={product} />
              </div>
            </Backdrop>
          )}
        </div>
      </div>
      <div className="flex relative flex-col p-6 mt-2 max-[700px]:p-2">
        {isLoading ? (
          <Skeleton variant="text" width={`150px`} height={`50px`} />
        ) : (
          <h2 className="text-3xl font-bold font-sofia max-[800px]:text-2xl max-[700px]:text-base">
            Similar {product?.pmake?.toUpperCase()} Listing
          </h2>
        )}
        {/* {isLoading ? (
          <Skeleton variant="text" width={`100%`} height={`80px`} />
        ) : ( */}
        <SimilarListing
          similar={similar}
          isLoading={sLoading}
          currentId={product._id}
        />
        {/* )} */}
      </div>
    </StyledDetails>
  );
};

export default Details;
