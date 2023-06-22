import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInput = ({ value, required, onChange }) => {
  const [showpassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const handleClickShowPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setShowPassword(true);
    } else if (passwordType === "text") {
      setPasswordType("password");
      setShowPassword(false);
    }
  };
  return (
    <div className="flex relative justify-between w-10/12 bg-white pr-2 rounded-[3px] items-center">
      <input
        type={passwordType}
        className="w-10/12 p-3 rounded-lg bg-transparent border-none outline-none font-bold font-sofia"
        placeholder="Password"
        value={value}
        onChange={onChange}
        required={true}
      />
      <span onClick={handleClickShowPassword}>
        {" "}
        {showpassword ? (
          <FiEye size={25} className="cursor-pointer" />
        ) : (
          <FiEyeOff size={25} className="cursor-pointer" />
        )}
      </span>
    </div>
  );
};

export default PasswordInput;
