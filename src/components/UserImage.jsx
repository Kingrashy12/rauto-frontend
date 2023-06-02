import { Box } from "@mui/material";
import React from "react";
import { Female, Male } from "../asset";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      {user?.gender === "male" && (
        <img
          src={image}
          style={{ objectFit: "cover", borderRadius: "50%" }}
          alt="User"
          width={size}
          height={size}
        />
      )}
      {user?.gender === "female" && (
        <img
          src={image}
          style={{ objectFit: "cover", borderRadius: "50%" }}
          alt="User"
          width={size}
          height={size}
        />
      )}
    </Box>
  );
};

export default UserImage;
