import React from "react";

const PromotionCard = ({ image, name, percent }) => {
  return (
    <div
      className="bg-lightGray p-5 min-h-max  gap-2 bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "50% center",
      }}
    >
      <div className="w-[60%] float-end py-5">
        <p className="text-lg ">{name}</p>
        <h4 className="mb-4">up to {percent}% off</h4>
        <a
          href="#"
          className="uppercase border-b py-1 border-sunsetOrange text-sunsetOrange font-[600] text-sm !my-4"
        >
          shop now
        </a>
      </div>
    </div>
  );
};

export default PromotionCard;
