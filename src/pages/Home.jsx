import React, { useEffect, useState } from "react";
import { StyledHome } from "../styles/pages/home.styled";
import { PostFeed } from "../components";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

const Home = () => {
  const [fliter, setFilter] = useState(false);
  useEffect(() => {
    document.title = "Home - RAuto";
  });
  return (
    <StyledHome className="mt-5 ml-5 max-[1024px]:ml-0">
      <div className="flex justify-between w-full relative">
        <PostFeed filter={fliter} setFilter={setFilter} />
        <div
          className="fixed w-auto bg-white shadow shadow-black rounded-2xl p-3 flex items-center justify-center right-5 bottom-16 z-z-100 cursor-pointer"
          onClick={() => setFilter(!fliter)}
        >
          <p className="font-semibold text-xl text-center flex items-center">
            {fliter ? <MdFilterAltOff size={25} /> : <MdFilterAlt size={25} />}
          </p>
          {/* <p className="font-semibold text-xl text-center flex items-center">
            Filter <MdFilterAlt size={25} />{" "}
          </p> */}
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
