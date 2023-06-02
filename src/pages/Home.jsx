import React, { useEffect } from "react";
import { StyledHome } from "../styles/pages/home.styled";
import { PostFeed } from "../components";

const Home = () => {
  useEffect(() => {
    document.title = "Home - RAuto";
  });
  return (
    <StyledHome className="mt-5 ml-5 max-[1024px]:ml-0">
      <div className="flex justify-between">
        <PostFeed />
      </div>
    </StyledHome>
  );
};

export default Home;
