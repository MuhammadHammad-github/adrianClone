import React from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="py-20 respPx20">
      <div className="bg-lightGray py-10 flex flex-col items-center gap-4">
        <h5>Oops! Your Page Not Found.</h5>
        <h1 className="750px:!text-[300px] 750px:leading-[300px] !text-[150px] leading-[150px]">
          4<span className="text-gray">0</span>4
        </h1>
        <button
          className="btn btn2 !w-max !px-6 "
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Page404;
