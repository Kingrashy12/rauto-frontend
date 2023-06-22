import React from "react";

const TextInput = ({ value, onChange, required, name, placeholder }) => {
  return (
    <div className="flex justify-between w-10/12 items-center bg-white pr-2 rounded-[3px]">
      <input
        onChange={onChange}
        value={value}
        type="text"
        className="w-10/12 p-3 bg-transparent outline-none font-bold border-none font-sofia"
        placeholder={placeholder}
        required={true}
      />
      {required ? (
        ""
      ) : (
        <p className="text-red-600 font-semibold self-end font-sofia text-xs">
          {required && `${name} is required`}
        </p>
      )}
      <p className="text-red-600 font-semibold self-end font-sofia text-xs">
        {required ? "" : `Enter ${name}`}
      </p>
    </div>
  );
};

export default TextInput;
