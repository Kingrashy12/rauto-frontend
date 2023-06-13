import React, { useEffect, useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";
import { RiAddBoxFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Notification from "../modal/Notification";
import { Backdrop, Badge } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";

const BottomNav = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [res, setRes] = useState([]);
  const [open, setOpen] = useState(false);

  async function fetch() {
    const response = await axios.get(
      `${BASE_URL}/users/notify/${auth?.username}`
    );
    const fetched = response?.data;
    setRes(fetched);
    console.log("my response", res);
  }

  useEffect(() => {
    fetch();
  });

  function uP() {
    if (auth?._id) {
      navigate(`/user/${auth?.username}`);
    } else {
      navigate("/login");
    }
  }

  function vU() {
    if (auth?._id) {
      navigate("/sell-your-car");
    } else {
      navigate("/login");
    }
  }

  function vUser() {
    if (auth?._id) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }
  return (
    <div className="max-[2500px]:hidden max-[800px]:block fixed bottom-0 w-full bg-white shadow p-1 border-t border-t-neutral-300 z-50">
      {open && (
        <Backdrop open={open}>
          {res?.notifications?.map((notify) => (
            <Notification setOpen={setOpen} notify={notify} />
          ))}
        </Backdrop>
      )}
      <div className="flex justify-between">
        <HiHome
          size={35}
          className={`${
            path.pathname === "/" ? "bg-black text-white" : ""
          } p-1 rounded-lg`}
          onClick={() => navigate("/")}
        />
        <Badge badgeContent={res?.notifications?.length} color="error">
          <BsFillBellFill
            size={35}
            className={`${
              path.pathname === "/notification" ? "bg-black text-white" : ""
            } p-1 rounded-lg`}
            onClick={vUser}
          />
        </Badge>
        <RiAddBoxFill
          size={35}
          className={`${
            path.pathname === "/sell-your-car" ? "bg-black text-white" : ""
          } p-1 rounded-lg`}
          onClick={vU}
        />
        <BiMessageDetail
          size={35}
          className={`${
            path.pathname === "/messages" ? "bg-black text-white" : ""
          } p-1 rounded-lg`}
          onClick={vUser}
        />
        <FaUserCircle
          size={35}
          className={`${
            path.pathname === `/user/${auth?.username}`
              ? "bg-black text-white"
              : ""
          } p-1 rounded-lg`}
          onClick={uP}
        />
      </div>
    </div>
  );
};

export default BottomNav;
