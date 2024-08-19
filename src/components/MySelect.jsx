import React from "react";
const MySelect = ({ options = [] }) => {
  return (
    <div class="w-full  mx-auto ">
      <div class="relative">
        <select
          id="selectMenu"
          class="block appearance-none w-full bg-white border border-slate-300 text-gray-700 py-3 px-3 pr-8  leading-tight focus:outline-none focus:ring-1 focus:ring-[#FB5C42] focus:border-[#FB5C42] text-gray"
        >
          <option value="">Default</option>
          {options.map((option, index) => {
            return (
              <option value={option.value} className="" key={index}>
                {option.text}
              </option>
            );
          })}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MySelect;
