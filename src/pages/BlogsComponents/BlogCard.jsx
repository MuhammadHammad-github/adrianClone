import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ image }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/blogSingle")} className="cursor-pointer">
        <img src={image} alt="blogImage" className="max-w-full h-auto" />
      </div>
      <div className="my-5 flex flex-col gap-4">
        <a
          href="#"
          onClick={() => navigate("/blogSingle")}
          className="capitalize text-[1.75rem] font-[600]"
        >
          How to wear bright shoes
        </a>
        <div className="flex gap-3 items-center">
          <a href="#" className="text-sunsetOrange">
            Admin
          </a>
          <span>20 Mar 2020</span>
          <a href="#" className="text-sunsetOrange">
            lifestyle
          </a>
          <a href="#" className="text-sunsetOrange">
            travel
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae
          placeat ad architecto nostrum asperiores vel aperiam, veniam eum
          nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam
          fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Odio vitae ab doloremque accusamus sit, eos dolorum officiis a
          perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quod, facere.
        </p>
        <div>
          <a
            href="#"
            onClick={() => navigate("/blogSingle")}
            className="uppercase text-sm font-[600] transitional hover:border-b-sunsetOrange text-sunsetOrange border-b border-b-black"
          >
            Continue Reading
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
