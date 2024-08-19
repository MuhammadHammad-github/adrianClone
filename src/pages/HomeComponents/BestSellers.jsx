import React from "react";
import MiniProductCard from "../../components/MiniProductCard";

const BestSellers = () => {
  return (
    <div className="my-10 respPx20 resp3ColGrid gap-7">
      <div className="1000px:col-span-1 650px:col-span-2">
        <img
          src="https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/adsv.jpg"
          alt="ad"
          className="max-w-full h-auto w-full"
        />
      </div>
      <div className="">
        <h4 className="border-b border-lightGray pb-3 headingWithUnderline">
          Best Sellers
        </h4>
        <div className="my-5 flex flex-col gap-4">
          <MiniProductCard
            image={
              "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-1.jpg"
            }
            price={"42.99"}
            name={"Keds - Kickstart Pom Pom"}
          />{" "}
          <MiniProductCard
            image={
              "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-2.jpg"
            }
            price={"27.99"}
            name={"Nike - Brasilia Medium Backpack"}
          />{" "}
          <MiniProductCard
            image={
              "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-3.jpg"
            }
            price={"38.00"}
            name={"Guess - GU7295"}
          />{" "}
          <MiniProductCard
            image={
              "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-4.jpg"
            }
            price={"35.00"}
            name={"Adidas Originals Cap"}
          />{" "}
          <MiniProductCard
            image={
              "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-5.jpg"
            }
            price={"10.60"}
            name={"Big Star Flip Tops"}
          />
        </div>
      </div>
      <div className=" ">
        <h4 className="border-b border-lightGray pb-3 headingWithUnderline">
          New Arrivals
        </h4>
        <div className="my-5 flex flex-col gap-4">
          <MiniProductCard
            image={
              "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-5.jpg"
            }
            price={"42.99"}
            name={"Keds - Kickstart Pom Pom"}
          />{" "}
          <MiniProductCard
            image={
              "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-4.jpg"
            }
            price={"27.99"}
            name={"Nike - Brasilia Medium Backpack"}
          />{" "}
          <MiniProductCard
            image={
              "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-3.jpg"
            }
            price={"38.00"}
            name={"Guess - GU7295"}
          />{" "}
          <MiniProductCard
            image={
              "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-1.jpg"
            }
            price={"35.00"}
            name={"Adidas Originals Cap"}
          />{" "}
          <MiniProductCard
            image={
              "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-2.jpg"
            }
            price={"10.60"}
            name={"Big Star Flip Tops"}
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
