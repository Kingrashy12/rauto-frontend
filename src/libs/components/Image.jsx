import { Skeleton } from "@mui/material";
import React from "react";

const Image = ({
  isLoading,
  src,
  className,
  alt,
  loadingWidth,
  loadingHeight,
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width={loadingWidth}
          height={loadingHeight}
        />
      ) : (
        <img src={src} alt={alt} className={className} />
      )}
    </>
  );
};

export default Image;
