import React from "react";
import PromotionCard from "./PromotionCard";

const Promotions = () => {
  return (
    <div className="grid 1150px:grid-cols-3 md:grid-cols-2 grid-cols-1  respPx20 gap-8 my-10">
      <PromotionCard
        image={
          "https://demo.themefisher.com/adrian-bootstrap/images/about/cat-1.jpg"
        }
        name={"Stylish Leather watch"}
        percent={50}
      />
      <PromotionCard
        image={
          "https://demo.themefisher.com/adrian-bootstrap/images/about/cat-2.jpg"
        }
        name={"Ladies hand bag"}
        percent={50}
      />
      <PromotionCard
        image={
          "https://demo.themefisher.com/adrian-bootstrap/images/about/cat-3.jpg"
        }
        name={"Trendy shoe"}
        percent={50}
      />
    </div>
  );
};

export default Promotions;
