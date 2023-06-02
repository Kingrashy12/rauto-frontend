import React from "react";
import { NotWrapper } from "../styles/pages/Notfound.styled";
import { RAuto } from "../asset";

const NotFound = () => {
  return (
    <NotWrapper className="mt-5">
      <div className="flex flex-col items-center justify-center">
        <img
          src={RAuto}
          alt="RAuto Logo"
          className="w-1/2 h-64 max-[700px]:w-10/12"
        />
        <h1 className="font-bold font-share text-7xl">404</h1>
        <p className="text-lg font-semibold font-sofia max-[700px]:text-center">
          Opp's, Sorry the page you're looking for is under development
        </p>
      </div>
    </NotWrapper>
  );
};

export default NotFound;
