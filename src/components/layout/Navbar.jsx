import React, { useEffect, useState } from "react";
import { StyledNav } from "../../styles/layout/Nav.styled";
import { FiSearch } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillBellFill, BsFillBookmarksFill } from "react-icons/bs";
import { RAuto } from "../../asset";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { navtype, navtypeI } from "../../data/nav";
// import { HiOutlineLogin } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import LogoutIcon from "@mui/icons-material/Logout";
import { productdata } from "../../data/product";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [used, setUsed] = useState(false);
  const [view, setView] = useState(false);
  const [value, setValue] = useState("");
  const [iscliked, setIsCliked] = useState(false);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const xl = "1440px";

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("searched:", searchTerm);
  };

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

  useEffect(() => {
    if (iscliked) {
      setTimeout(() => {
        setIsCliked(false);
      }, 15000);
    }
  });
  return (
    <StyledNav className="bg-white sticky -top-1 shadow-black shadow-md">
      <div className="flex gap-3 items-center">
        <img
          src={RAuto}
          alt=""
          className="w-44 cursor-pointer max-[700px]:w-28"
          onClick={() => navigate("/")}
          to="/auth"
        />
        <div className="flex bg-slate-300 p-1 w-96 pl-4 rounded-3xl items-center relative max-[700px]:w-56 max-[700px]:p-0 max-[700px]:pl-3 max-[350px]:w-48 max-[350px]:p-xs-s max-[350px]:pl-2">
          <FiSearch
            size={xl ? 23 : 16}
            onClick={() => onSearch(value)}
            className="cursor-pointer max-[350px]:order-2 max-[350px]:-translate-x-3 max-[350px]:text-80 text-black hover:text-slate-800"
          />
          <input
            type="text"
            placeholder="Search"
            value={value}
            onKeyDown={() => onSearch(value)}
            onChange={handleChange}
            className="w-80 p-2 max-[700px]:p-1 max-[700px]:w-56 max-[350px]:w-44 max-[350px]:p-xs-s max-[350px]:text-sm bg-transparent outline-none focus:border-sky-500 placeholder:text-black focus:outline-1 font-semibold font-sofia text-black"
          />
        </div>
        <div
          className={`${
            value ? "flex" : "hidden"
          }   flex-col absolute shadow w-96 top-18 max-[700px]:top-10.5 max-[700px]:left-32 max-[700px]:w-56 max-[350px]:w-48 max-[350px]:left-28 left-52 bg-white rounded-b-lg p-1`}
        >
          {productdata
            .filter((data) => {
              const searchTerm = value.toLowerCase();
              const pname = data.name.toLowerCase();

              return (
                searchTerm &&
                pname.startsWith(searchTerm) &&
                pname !== searchTerm
              );
            })
            .map((data, index) => (
              <div
                className="flex p-1 flex-col"
                key={index}
                onClick={() => {
                  setIsCliked(true);
                  setValue("");
                  navigate(`/ad/${data.slug}`);
                }}
              >
                <p
                  onClick={() => {
                    onSearch(data.name);
                  }}
                  className="font-semibold p-3 rounded-lg hover:bg-neutral-300 cursor-pointer"
                >
                  {data.name}
                </p>
              </div>
            ))}
        </div>
        <div className="max-[800px]:hidden flex justify-evenly">
          <p
            className="text-black font-bold flex gap-1 cursor-pointer"
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
            className="text-black font-bold flex gap-1 cursor-pointer"
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
            className="font-semibold cursor-pointer bg-black border-none text-white p-2 hover:opacity-70 rounded-md text-sm transition-all ease-linear duration-700"
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
      <div className="flex gap-5 pr-5 max-[800px]:hidden items-center">
        {auth?._id ? (
          <>
            <BsFillBellFill
              size={40}
              className="hover:cursor-pointer hover:bg-slate-300 p-2 rounded-lg"
              onClick={OpenChat}
            />
            <BiMessageDetail
              size={40}
              className="hover:cursor-pointer hover:bg-slate-300 p-2 rounded-lg"
              onClick={OpenChat}
            />
            <BsFillBookmarksFill
              size={40}
              className="hover:cursor-pointer hover:bg-slate-300 p-2 rounded-lg"
              onClick={OpenChat}
            />
            <div
              className={`flex bg-slate-800 p-1 ${
                view ? "rounded-t-md" : "rounded-md"
              }`}
            >
              <p
                className={`text-white font-semibold ${
                  auth?._id && "w-auto"
                } font-sofia text-lg flex justify-between gap-1 items-center cursor-pointer`}
                onClick={() => setView(!view)}
              >
                {auth?._id ? auth.name : ""}
                {view ? (
                  <IoMdArrowDropup size={30} />
                ) : (
                  <IoMdArrowDropdown size={30} />
                )}
              </p>
              {view && (
                <div
                  className={`flex flex-col bg-slate-800 rounded-b-lg p-2 absolute ${
                    auth?._id && "w-44"
                  } top-3.5 right-9 shadow-2xl shadow-slate-400`}
                >
                  {auth?._id && (
                    <>
                      <p
                        className="text-xl font-sofia text-white cursor-pointer hover:bg-neutral-500 p-2 border-b flex gap-1"
                        onClick={() => navigate(`/user/${auth?.username}`)}
                      >
                        <FaUserCircle size={25} />
                        Profile
                      </p>
                      <p className="text-xl font-sofia text-white cursor-pointer hover:bg-neutral-500 p-2 border-b flex gap-1">
                        <FcAdvertising size={25} />
                        My Listing
                      </p>
                    </>
                  )}
                  {auth?._id && (
                    <p
                      className="text-xl font-sofia text-white cursor-pointer hover:bg-neutral-500 p-2 border-b flex gap-1"
                      onClick={() => dispatch(setLogout())}
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
              className="text-white border-2 border-black bg-black p-2 text-sm outline-none rounded-md hover:bg-transparent hover:text-black font-sofia font-bold"
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
