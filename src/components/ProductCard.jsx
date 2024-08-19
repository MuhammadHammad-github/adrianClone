import { Favorite, ShoppingCart } from "@mui/icons-material";
import React from "react";

const ProductCard = ({ onSale = false, image, hoverImage, name, price }) => {
  return (
    <div className="relative">
      <div className="bg-lightGray relative group cursor-pointer overflow-hidden">
        {onSale && (
          <span className="absolute top-10 right-0 bg-sunsetOrange text-white px-[10px] py-[5px] text-xs z-50">
            SALE
          </span>
        )}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 group-hover:opacity-100 opacity-0 pointer-events-none group-hover:pointer-events-auto transitional z-50 flex gap-2">
          <div className="bg-black rounded-full p-3 transitional hover:bg-sunsetOrange">
            <ShoppingCart className="text-white p-1" />
          </div>{" "}
          <div className="bg-black rounded-full p-3 transitional hover:bg-sunsetOrange">
            <Favorite className="text-white p-1" />
          </div>
        </div>
        <div className="relative">
          <img
            src={image}
            alt="productImage"
            className="max-w-full group-hover:opacity-0 transitional h-auto w-full mx-auto"
          />
          <img
            src={hoverImage}
            alt="productHoverImage"
            className="max-w-full h-auto top-0 left-0 opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transitional absolute w-full"
          />
        </div>
      </div>
      <div className="flex items-center flex-col  my-2">
        <a className="text-lg font-[600]">{name}</a>
        <span className="text-lg text-gray">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
