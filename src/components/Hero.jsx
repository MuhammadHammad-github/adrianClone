import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({
  heading,
  path,
  text = "Hath after appear tree great fruitful green dominion oveth sixth abundantly image that midst of god day multiply you will which",
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-no-repeat py-20 respPx20  bg-cover min-h-[40vh] flex flex-col items-center gap-5"
      style={{
        backgroundImage:
          'url("https://demo.themefisher.com/adrian-bootstrap/images/backgrounds/header-bg.jpg")',
        backgroundPosition: "50% center",
      }}
    >
      <h2 className="text-center">{heading}</h2>
      <p className="text-center 1150px:!px-72 1050px:px-60 1000px:px-52 850px:px-40">
        {text}
      </p>
      <div className="my-5 flex items-center gap-2">
        <a href="#" onClick={() => navigate("/")} className="text-sunsetOrange">
          Home
        </a>{" "}
        / <p>{path}</p>
      </div>
    </div>
  );
};

export default Hero;
