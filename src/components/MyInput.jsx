import React from "react";

const MyInput = ({ placeholder, required }) => {
  return (
    <input
      required={required}
      className="py-[0.5rem] px-[.75rem] text-base w-full bg-lightGray transitional focus:bg-white outline-none border border-lightGray placeholder:text-slate-600 text-gray focus:border-sunsetOrange"
      placeholder={placeholder}
    />
  );
};

export default MyInput;
