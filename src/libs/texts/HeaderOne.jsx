import { Skeleton } from "@mui/material";
import React from "react";

const HeaderOne = ({
  fontSemibold,
  fontBold,
  fontExtralBold,
  fontSofia,
  fontShare,
  fontPoppins,
  isLoading,
  text,
  loadingWidth,
  loadingHeight,
  className,
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton variant="text" width={loadingWidth} height={loadingHeight} />
      ) : (
        <h1
          className={`${className} ${
            fontSemibold ? "font-semibold" : "font-medium"
          } ${fontBold ? "font-bold" : "font-medium"} ${
            fontExtralBold ? "font-extrabold" : "font-medium"
          } ${fontSofia && "font-sofia"} ${fontPoppins && "font-poppin"} ${
            fontShare && "font-share"
          }`}
        >
          {text}
        </h1>
      )}
    </>
  );
};

export default HeaderOne;
