import React from "react";

const NotAvailable = ({ data }) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-sofai text-2xl font-semibold">
        No Listing for {data}
      </h1>
    </div>
  );
};

export default NotAvailable;
