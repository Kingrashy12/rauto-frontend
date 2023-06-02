import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";
import { RiAddBoxFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BottomNav = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  return (
    <div className="max-[2500px]:hidden max-[800px]:block fixed bottom-0 w-full bg-white shadow p-1 border-t border-t-neutral-300 z-50">
      <div className="flex justify-between">
        <HiHome
          size={35}
          className={`${
            path.pathname === "/" ? "bg-black text-white" : ""
          } p-1 rounded-lg`}
          onClick={() => navigate("/")}
        />
        <BsFillBellFill
          size={35}
          className={`${
            path.pathname === "/notification" ? "bg-black text-white" : ""
          } p-1 rounded-lg`}
          onClick={() => navigate("/notification")}
        />
        <RiAddBoxFill
          size={35}
          className={`${
            path.pathname === "/sell-your-car" ? "bg-black text-white" : ""
          } p-1 rounded-lg`}
          onClick={() => navigate("/sell-your-car")}
        />
        <BiMessageDetail
          size={35}
          className={`${
            path.pathname === "/messages" ? "bg-black text-white" : ""
          } p-1 rounded-lg`}
          onClick={() => navigate("/messages")}
        />
        <FaUserCircle
          size={35}
          className={`${
            path.pathname === `/user/${auth?.username}`
              ? "bg-black text-white"
              : ""
          } p-1 rounded-lg`}
          onClick={() => navigate(`/user/${auth?.username}`)}
        />
      </div>
    </div>
  );
};

export default BottomNav;
