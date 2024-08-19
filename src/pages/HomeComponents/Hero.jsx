import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="bg-sunsetOrange rounded-full p-4 opacity-35 hover:opacity-100 transitional absolute 1000px:block hidden right-4 top-1/2 transform  -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <ChevronRight className="!text-3xl text-white " />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="bg-sunsetOrange rounded-full p-4 opacity-35 hover:opacity-100 transitional absolute 1000px:block hidden left-4 top-1/2 transform  -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <ChevronLeft className="!text-3xl text-white " />
    </div>
  );
};
const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="">
      <div className="heroSlide1 1000px:min-h-[70vh] w-full">
        {" "}
        <SlideContent
          heading={"Collection"}
          highText={"Winter"}
          text={"Trendy Dress"}
        />
      </div>
      <div className="heroSlide2 1000px:min-h-[70vh]">
        <SlideContent
          heading={"to everything"}
          highText={"70% Off"}
          text={"Winter Collection Sale"}
        />
      </div>
      <div className="heroSlide3 1000px:min-h-[70vh]">
        <SlideContent
          heading={"Style"}
          highText={"Classic"}
          text={"Up to 70% Off"}
        />
      </div>
    </Slider>
  );
};
const SlideContent = ({ heading, highText, text }) => {
  return (
    <div className="gap-4 px-10 1000px:w-[55%] 700px:w-[50%] w-full py-40 float-end flex flex-col    min-h-full">
      <span className="text-xl text-gray ">{text}</span>
      <h1 className=" 1000px:leading-[90px] 1000px:text-[90px] text-[38px] leading-[38px] font-[800] ">
        {" "}
        <span className="text-sunsetOrange">{highText}</span> {heading}
      </h1>
      <div className="my-5">
        <button className="heroBtn relative bg-sunsetOrange hover:bg-black text-white transitional px-[35px] py-[14px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
