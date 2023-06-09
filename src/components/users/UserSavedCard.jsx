import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../hooks/api";
import { ClipLoader } from "react-spinners";
import { removeItem } from "../../hooks/saveSlice";

const UserSavedCard = ({ item }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [IsLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  function handleDelete(item) {
    dispatch(removeItem(item));
  }

  return (
    <div className="w-full relative flex flex-col p-2">
      <div className="flex max-[800px]:flex-col bg-white relative border border-neutral-300 shadow rounded-lg hover:shadow-2xl cursor-pointer">
        <img
          src={item.pImage?.url}
          className="w-80 h-52 rounded-l-lg max-[700px]:w-full"
          alt="Listing Image"
          onClick={() => navigate(`/listing/${item._id}`)}
        />
        <div className="flex flex-col relative p-4 justify-between">
          <p className="font-sofia text-xl font-semibold">{item.pname}</p>
          <p className="font-bold text-green-600 font-sofia text-lg">
            {" "}
            &#8358; {item.pPrice?.toLocaleString()}
          </p>
          <span className="font-poppin font-semibold text-sm text-neutral-400">
            {item.pdesc}
          </span>
          <button
            className="bg-transparent text-black font-sofia font-bold text-base border-2 border-black hover:bg-slate-300 relative w-28 hover:opacity-70 p-1 rounded-md cursor-pointer"
            onClick={() => handleDelete(item)}
          >
            {IsLoading ? <ClipLoader size={23} color="#000" /> : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSavedCard;
