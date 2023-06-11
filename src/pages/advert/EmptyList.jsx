import React from "react";
import { EmptyListWrapper } from "../../styles/pages/empty.styled";
import { MdOutlineWifiTetheringError } from "react-icons/md";

const EmptyList = () => {
  return (
    <EmptyListWrapper>
      <MdOutlineWifiTetheringError size={30} />
      <h2>Network Error</h2>
    </EmptyListWrapper>
  );
};

export default EmptyList;
