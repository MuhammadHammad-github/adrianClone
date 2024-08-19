import { Comment, Favorite } from "@mui/icons-material";
import React from "react";

const FollowOnInsta = () => {
  return (
    <div className="my-20 px-3">
      <p className="text-center">@someInstagramId</p>
      <h2 className="capitalize text-center !text-[32px]">
        follow us on instagram
      </h2>
      <div className="my-10 grid 900px:grid-cols-6 700px:grid-cols-4 500px:grid-cols-3 grid-cols-2 gap-4">
        <Card
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/feed/i1.jpg"
          }
          likes={40}
          comments={24}
        />{" "}
        <Card
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/feed/i2.jpg"
          }
          likes={65}
          comments={11}
        />
        <Card
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/feed/i5.jpg"
          }
          likes={33}
          comments={78}
        />{" "}
        <Card
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/feed/i4.jpg"
          }
          likes={32}
          comments={77}
        />{" "}
        <Card
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/feed/i1.jpg"
          }
          likes={80}
          comments={38}
        />{" "}
        <Card
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/feed/i5.jpg"
          }
          likes={22}
          comments={57}
        />{" "}
      </div>
    </div>
  );
};

export default FollowOnInsta;
const Card = ({ image, comments, likes }) => {
  return (
    <div className="relative group ">
      <img
        src={image}
        alt="insta image"
        className="max-w-full h-auto object-contain w-60"
      />
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 flex  items-center justify-center transitional group-hover:opacity-100 opacity-0">
        <div className="hover:text-sunsetOrange mx-2 text-white cursor-pointer transitional">
          <Favorite className="!text-xl" /> {likes}
        </div>{" "}
        <div className="hover:text-sunsetOrange mx-2 text-white cursor-pointer transitional">
          <Comment className="!text-xl" /> {comments}
        </div>
      </div>
    </div>
  );
};
