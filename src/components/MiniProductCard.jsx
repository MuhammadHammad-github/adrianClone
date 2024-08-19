import React from "react";

const MiniProductCard = ({ price, name, image }) => {
  return (
    <div className="w-full flex gap-4 cursor-pointer">
      <div className="w-[20%]">
        <img
          src={image}
          alt="productImage"
          className="max-w-full object-cover w-full "
        />
      </div>
      <div>
        <a href="#">{name}</a>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default MiniProductCard;
