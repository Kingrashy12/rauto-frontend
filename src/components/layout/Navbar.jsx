import React, { useEffect, useState } from "react";
import { StyledNav } from "../../styles/layout/Nav.styled";
import { FiSearch } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillBellFill, BsFillBookmarksFill } from "react-icons/bs";
import { RAuto, RAutoLogoNew } from "../../asset";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { navtype, navtypeI } from "../../data/nav";
// import { HiOutlineLogin } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../hooks/authSlice";
import { toast } from "react-toastify";
import { useGetAllListingsQuery } from "../../hooks/ListingApi";
import { Avatar } from "../../libs";
import { Backdrop, Badge } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import Notification from "../modal/Notification";
import NavSaerchBar from "../form/NavSaerchBar";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [used, setUsed] = useState(false);
  const [view, setView] = useState(false);
  const { data } = useGetAllListingsQuery();
  const auth = useSelector((state) => state.auth);
  const saved = useSelector((state) => state.saved.savedItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  function OpenChat() {
    if (!auth?._id) {
      navigate("/login");
    }
  }

  function Sell() {
    if (auth?._id) {
      navigate("/sell-your-car");
    } else {
      navigate("/login");
    }
  }

  return (
    <StyledNav className="bg-black fixed -top-1 shadow-white shadow-md">
      <div className="flex gap-3 items-center">
        <img
          src={RAutoLogoNew}
          alt=""
          className="w-44 cursor-pointer max-[700px]:w-28"
          onClick={() => navigate("/")}
          to="/auth"
        />
        {/* <img
          src={RAuto}
          alt=""
          className="w-44 cursor-pointer max-[700px]:w-28"
          onClick={() => navigate("/")}
          to="/auth"
        /> */}
        <NavSaerchBar data={data} />
        <div className="max-[800px]:hidden flex justify-evenly">
          <p
            className="text-white font-bold flex gap-1 cursor-pointer"
            onClick={() => {
              setDrop(!drop);
              setUsed(false);
            }}
          >
            New
            {drop ? (
              <IoMdArrowDropup size={30} />
            ) : (
              <IoMdArrowDropdown size={30} />
            )}
          </p>
          <p
            className="text-white font-bold flex gap-1 cursor-pointer"
            onClick={() => {
              setUsed(!used);
              setDrop(false);
            }}
          >
            Used{" "}
            {used ? (
              <IoMdArrowDropup size={30} />
            ) : (
              <IoMdArrowDropdown size={30} />
            )}
          </p>
          <button
            onClick={Sell}
            className="font-semibold cursor-pointer bg-white border-none text-black p-2 hover:opacity-70 rounded-md text-sm transition-all ease-linear duration-700"
          >
            Sell Your Car
          </button>
          {drop && (
            <div className="flex absolute bg-black rounded-md w-auto h-auto p-2 left-center-drop top-14">
              <div className="flex flex-col justify-evenly gap-1">
                {navtype.map((type, index) => (
                  <div className="flex flex-col text-white w-full" key={index}>
                    <a
                      href={type.link}
                      // href={type.link.replace(/\s+/g, "+")}
                      onClick={() => setDrop(false)}
                      className="hover:bg-slate-700 cursor-pointer w-full p-2 rounded-md font-semibold"
                    >
                      {type.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
          {used && (
            <div className="flex absolute bg-black rounded-md w-auto h-auto p-2 left-41 top-14">
              <div className="flex flex-col justify-evenly gap-1">
                {navtypeI.map((type, index) => (
                  <div className="flex flex-col text-white w-full" key={index}>
                    <a
                      href={type.link}
                      // href={type.link.replace(/\s+/g, "+")}
                      onClick={() => setUsed(false)}
                      className="hover:bg-slate-700 cursor-pointer w-full p-2 rounded-md font-semibold"
                    >
                      {type.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {open && (
        <Backdrop open={open}>
          {res?.notifications?.map((notify) => (
            <Notification setOpen={setOpen} notify={notify} />
          ))}
        </Backdrop>
      )}
      <div className="flex gap-5 pr-5 max-[800px]:hidden items-center">
        {auth?._id ? (
          <>
            <Badge badgeContent={res?.notifications?.length} color="error">
              <BsFillBellFill
                size={40}
                className="hover:cursor-pointer relative hover:bg-slate-300 p-2 rounded-lg"
                onClick={() => setOpen(true)}
              />
            </Badge>
            <BiMessageDetail
              size={40}
              className="hover:cursor-pointer hover:bg-slate-300 p-2 rounded-lg"
              onClick={OpenChat}
            />
            <Badge badgeContent={saved.length} color="info">
              <BsFillBookmarksFill
                size={40}
                className="hover:cursor-pointer hover:bg-slate-300 p-2 rounded-lg"
                onClick={() => navigate("/user/saved")}
              />
            </Badge>
            <div>
              {auth?._id ? (
                <Avatar
                  user={auth}
                  isNav
                  hasBorder
                  onClick={() => setView(!view)}
                />
              ) : (
                ""
              )}

              {view && (
                <div
                  className={`flex flex-col bg-white rounded-lg p-1 w-44 absolute top-3.5 right-6 shadow-md shadow-black`}
                >
                  {auth?._id && (
                    <>
                      <p
                        className="text-base font-sofia text-black cursor-pointer hover:bg-slate-100 p-2 border-b flex gap-1"
                        onClick={() => navigate(`/user/${auth?.username}`)}
                      >
                        <FaUserCircle size={20} />
                        Profile
                      </p>
                      <p className="text-base font-sofia text-black cursor-pointer hover:bg-slate-100 p-2 border-b flex gap-1">
                        <FcAdvertising size={20} />
                        My Listing
                      </p>
                    </>
                  )}
                  {auth?._id && (
                    <p
                      className="text-base font-sofia text-black cursor-pointer hover:bg-slate-100 p-2 border-b flex gap-1"
                      onClick={() => {
                        dispatch(logOutUser(null));
                        toast.warning("You logged out", {
                          position: "top-center",
                        });
                      }}
                    >
                      <LogoutIcon />
                      Logout
                    </p>
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <button
              className="text-black border-2 border-black bg-slate-200 text-sm outline-none p-2 rounded-md hover:bg-black hover:text-white font-sofia font-bold"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="text-white border-2 border-white bg-transparent p-2 text-sm outline-none rounded-md hover:bg-transparent hover:opacity-75 font-sofia font-bold"
              onClick={() => navigate("/register")}
            >
              SignUp
            </button>
          </>
        )}
      </div>
    </StyledNav>
  );
};

export default Navbar;
