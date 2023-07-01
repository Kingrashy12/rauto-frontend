import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillBellFill, BsFillBookmarksFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteAccount, logOutUser } from "../../hooks/authSlice";

const UserLinks = ({ user, u }) => {
  // const [setLoading] = useState(false);
  const auth = useSelector((state) => state.auth);
  const userId = auth?._id;
  // alert(userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteAccount(userId));
    setTimeout(() => {
      dispatch(logOutUser());
      navigate("/");
    }, 5000);
  }

  return (
    <div className="relative w-full">
      <hr className="z-0" />
      {u?._id === user ? (
        <>
          <p
            className="text-lg font-semibold font-sofia flex gap-2 items-center hover:bg-slate-400 hover:text-white p-3 rounded-sm cursor-pointer"
            onClick={() => navigate(`/user/saved`)}
          >
            <BsFillBookmarksFill size={25} /> Saved
          </p>
          <hr className="z-0" />
        </>
      ) : (
        ""
      )}
      {u?._id === user ? (
        <>
          <p className="text-lg font-semibold font-sofia flex items-center gap-2 hover:bg-slate-400 hover:text-white p-3 rounded-sm cursor-pointer">
            My Listing
          </p>
          <hr />
        </>
      ) : (
        ""
      )}
      <p className="text-lg font-semibold font-sofia flex items-center gap-2 hover:bg-slate-400 hover:text-white p-3 rounded-sm cursor-pointer">
        <BiMessageDetail size={25} /> {u?._id === user ? "Messages" : "Chat"}
      </p>
      <hr className="z-0" />
      {u?._id === user ? (
        <>
          <p className="text-lg font-semibold font-sofia flex items-center gap-2 hover:bg-slate-400 hover:text-white p-3 rounded-sm cursor-pointer">
            <BsFillBellFill size={25} /> Notifications
          </p>
          <hr />
        </>
      ) : (
        ""
      )}
      {u?._id === user ? (
        <button
          className="bg-transparent border-2 mt-2 mb-2 text-red-600 p-2 rounded-md outline-none border-red-600 font-semibold hover:bg-red-600 hover:text-white"
          onClick={handleDelete}
        >
          Delete My Account
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserLinks;
