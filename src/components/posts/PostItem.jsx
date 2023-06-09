import React, { useState } from "react";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import { toast } from "react-toastify";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, saveItem } from "../../hooks/saveSlice";
// import { useSelector } from "react-redux";

const PostItem = ({ product, loading }) => {
  const auth = useSelector((state) => state.auth);
  const it = useSelector((state) => state.saved.savedItems);
  const i = it.find((item) => item._id === product._id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function add() {
    if (!auth._id) {
      navigate("/login");
    } else {
      dispatch(saveItem(product));
    }
  }

  function del(i) {
    if (!auth) {
      navigate("/login");
    } else {
      dispatch(removeItem(i));
    }
  }

  return (
    <div className="flex flex-col bg-slate-200 rounded-lg z-0 max-[700px]:rounded-md shadow-lg cursor-pointer hover:shadow-black w-72 max-[700px]:w-44 max-[450px]:w-48 max-[400px]:w-45.5 max-[370px]:w-10rem max-[375px]:w-10.5rem max-[330px]:w-36 h-80">
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={`100%`}
          height={`150px`}
          className="mt-2"
        />
      ) : (
        <img
          src={product?.pImage?.url}
          alt="Listing"
          className="w-full rounded-t-lg h-48 max-[700px]:rounded-t-md max-[700px]:h-44"
          // style={{ objectFit: "cover" }}
          onClick={() => navigate(`/listing/${product?._id}`)}
        />
      )}
      <div className="flex flex-col p-3 relative max-[700px]:p-2">
        {loading ? (
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        ) : (
          <>
            {i ? (
              <p onClick={() => del(i)}>
                <BsFillBookmarkCheckFill className="bg-white text-4xl p-2 rounded-lg absolute -translate-y-8 cursor-pointer max-[700px]:translate-x-0 max-[700px]:text-2xl max-[700px]:rounded-sm max-[700px]:p-1 max-[700px]:-translate-y-44 translate-x-52" />
              </p>
            ) : (
              <p onClick={add}>
                <BsBookmark className="bg-white text-4xl p-2 rounded-lg absolute -translate-y-8 cursor-pointer max-[700px]:translate-x-0 max-[700px]:text-2xl max-[700px]:rounded-sm max-[700px]:p-1 max-[700px]:-translate-y-44 translate-x-52" />
              </p>
            )}
          </>
        )}
        <div className="flex gap-2 items-center max-[700px]:flex-col max-[700px]:items-start max-[350px]:gap-3">
          {loading ? (
            <Skeleton variant="text" width={`200px`} />
          ) : (
            <>
              <span className="bg-slate-100 p-xs-s rounded-sm text-xs font-semibold">
                {product.pyear}
              </span>
              <h2 className="text-lg font-semibold max-[700px]:text-base2 max-[700px]:leading-base2H font-sofia">
                {product.pname}
              </h2>
            </>
          )}
        </div>
        {loading ? (
          <Skeleton variant="text" width={`80px`} />
        ) : (
          <p className="text-xs font-poppin font-medium mb-5">
            {/* {product.model} */}
          </p>
        )}
        <div className="text-neutral-400 border-b border-b-neutral-300"></div>
        {loading ? (
          <Skeleton variant="text" width={210} height={60} />
        ) : (
          <h3 className="font-semibold text-2xl font-sofia mt-3 max-[700px]:text-lg max-[700px]:font-bold">
            &#8358; {product.pPrice.toLocaleString()}
          </h3>
        )}
      </div>
    </div>
  );
};

export default PostItem;
