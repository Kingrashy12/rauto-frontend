import React, { useState } from "react";

const EmailInput = ({ value, onChange, required }) => {
  const [passwordType, setPasswordType] = useState("text");
  return (
    <div className="flex justify-between w-10/12 items-center bg-white pr-2 rounded-[3px]">
      <input
        onChange={onChange}
        value={value}
        type={passwordType}
        className="w-10/12 p-3 bg-transparent outline-none font-bold border-none font-sofia"
        placeholder="Email"
        required={true}
      />
      {required.includes("@gmail.com") ? (
        ""
      ) : (
        <p className="text-red-600 font-semibold self-end font-sofia text-xs">
          {required && "Enter v email"}
        </p>
      )}
      <p className="text-red-600 font-semibold self-end font-sofia text-xs">
        {required ? "" : "Enter email"}
      </p>
    </div>
  );
};

export default EmailInput;
