import React from "react";
import { SellPageWrapper } from "../styles/pages/Sell.styled";
import { CreateAd } from "../components";

const Sell = () => {
  return (
    <SellPageWrapper>
      <CreateAd />
    </SellPageWrapper>
  );
};

export default Sell;
