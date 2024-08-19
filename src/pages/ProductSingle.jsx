import React, { useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import MyInput from "../components/MyInput";
import { Rating } from "@mui/material";
import MySelect from "../components/MySelect";
import {
  FacebookOutlined,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import Slider from "react-slick";
const ProductSingle = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div className="customDot">
        <img
          src={`https://demo.themefisher.com/adrian-bootstrap/images/shop/single-products/product-${
            i + 1
          }.jpg`}
          alt={`productImage-${i + 1}`}
          style={{
            height: "200px",
            objectFit: "cover",
            borderRadius: "5px",
            border: "2px solid #f1f1f1", // Adding a border for better visibility
          }}
        />
      </div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px", // Adjusted gap for better spacing
            padding: 0,
            margin: 0,
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div>
      <Hero heading={"Product Single"} path={"Product Single"} />
      <div className="grid grid-cols-5 my-20 respPx20 gap-10 gap-y-56">
        <div className="800px:col-span-2 col-span-5">
          <Slider {...settings}>
            <div>
              <img
                src="https://demo.themefisher.com/adrian-bootstrap/images/shop/single-products/product-1.jpg"
                alt="productImage"
                className="max-w-full h-auto object-contain w-full "
              />
            </div>
            <div>
              <img
                src="https://demo.themefisher.com/adrian-bootstrap/images/shop/single-products/product-2.jpg"
                alt="productImage"
                className="max-w-full h-auto object-contain w-full "
              />
            </div>{" "}
            <div>
              <img
                src="https://demo.themefisher.com/adrian-bootstrap/images/shop/single-products/product-3.jpg"
                alt="productImage"
                className="max-w-full h-auto object-contain w-full "
              />
            </div>
          </Slider>
        </div>
        <div className="800px:col-span-3 col-span-5">
          <h2 className="font-[500] text-[32px]">Eclipse Crossbody</h2>
          <p>SKU: AB1563456789</p>
          <div className="border-t border-borderColor my-5 py-5 flex flex-col gap-5">
            <h2 className="text-[32px]">
              $300 <span className=" line-through text-gray">$119.00</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam
              a consequatur beatae nostrum, earum consequuntur? Eveniet
              consequatur ipsum dicta recusandae.
            </p>
            <div className="flex 350px:flex-row flex-col gap-4">
              <input
                type="number"
                className="border border-borderColor focus:border-sunsetOrange 350px:py-0 py-3"
              />
              <button className="btn btn2 max-w-max px-5 ">Add To Cart</button>
            </div>
            <div className="flex gap-20 items-center ">
              <h6>Color:</h6>
              <div className="flex gap-4">
                <div className="p-5 cursor-pointer bg-red-500 hover:bg-red-700 transitional"></div>
                <div className="p-5 cursor-pointer bg-blue-500 hover:bg-blue-700 transitional"></div>
                <div className="p-5 cursor-pointer bg-orange-500 hover:bg-orange-700 transitional"></div>
              </div>
            </div>
            <div className="flex gap-[90px] items-center">
              {" "}
              <h6>Size:</h6>
              <div className="350px:min-w-[20%] min-w-[40%] ">
                <MySelect
                  options={[
                    { text: "S", value: "s" },
                    { text: "M", value: "m" },
                    { text: "L", value: "l" },
                    { text: "XL", value: "xl" },
                  ]}
                />
              </div>
            </div>
            <div className="flex items-center gap-11">
              <h6>Categories:</h6>
              <div>Products, Soap</div>
            </div>
            <div className="flex items-center gap-2 my-10">
              <div className="cursor-pointer hover:text-sunsetOrange transitional">
                <FacebookOutlined className="p-1" />
              </div>{" "}
              <div className="cursor-pointer hover:text-sunsetOrange transitional">
                <Twitter className="p-1" />
              </div>{" "}
              <div className="cursor-pointer hover:text-sunsetOrange transitional">
                <LinkedIn className="p-1" />
              </div>{" "}
              <div className="cursor-pointer hover:text-sunsetOrange transitional">
                <Pinterest className="p-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDetails />
      <ProductsOnSale />
    </div>
  );
};
export default ProductSingle;
const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Description", "Additional Information", "Reviews(2)"];
  return (
    <div className="respPx20  my-40">
      <div className="border   border-borderColor flex 500px:flex-row flex-col items-center">
        {tabs.map((tab, index) => {
          return (
            <span
              onClick={() => setActiveTab(index)}
              key={index}
              className={`font-bold text-2xl py-4 transitional ${
                activeTab === index ? "opacity-100" : "opacity-50"
              } ${
                index === 1 && "500px:border-x border-borderColor"
              }  500px:w-1/3  text-center cursor-pointer`}
            >
              {tab}
            </span>
          );
        })}
      </div>
      <div
        className={`my-10 transitional ${
          activeTab === 0
            ? "opacity-100 pointer-events-auto fadeIn"
            : "opacity-0 pointer-events-none hidden"
        }`}
      >
        <p className="my-4">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
        <h4 className="my-4">Product Features</h4>
        <ul className="px-10">
          <li className="list-disc">
            Mapped with 3M™ Thinsulate™ Insulation [40G Body / Sleeves / Hood]
          </li>
          <li className="list-disc">Embossed Taffeta Lining</li>
          <li className="list-disc">
            DRYRIDE Durashell™ 2-Layer Oxford Fabric [10,000MM, 5,000G]
          </li>
        </ul>
      </div>
      <div
        className={`flex flex-col gap-3 my-10 transitional 900px:w-1/3 750px:w-1/2 500px:w-3/4 w-full  ${
          activeTab === 1
            ? "opacity-100 pointer-events-auto fadeIn"
            : "opacity-0 pointer-events-none hidden"
        }`}
      >
        <div className="flex justify-between">
          <h6>Weight</h6>
          <span>400 g</span>
        </div>
        <div className="flex justify-between">
          <h6>Dimensions</h6>
          <span>10 x 10 x 15 cm</span>
        </div>
        <div className="flex justify-between">
          <h6>Materials</h6>
          <span>60% cotton, 40% polyester</span>
        </div>
        <div className="flex justify-between">
          <h6>Color</h6>
          <span>Blue, Gray, Green, Red, Yellow</span>
        </div>
        <div className="flex justify-between">
          <h6>Size</h6>
          <span>L, M, S, XL, XXL</span>
        </div>
      </div>{" "}
      <div
        className={`my-10 transitional gap-5  grid grid-cols-5 ${
          activeTab === 2
            ? "opacity-100 pointer-events-auto fadeIn "
            : "opacity-0 pointer-events-none hidden"
        }`}
      >
        <div className="1000px:col-span-3 col-span-5 ">
          <div className="flex gap-5">
            <img
              src="https://demo.themefisher.com/adrian-bootstrap/images/shop/avater-1.jpg"
              alt="avatar"
              className="max-w-full h-auto object-contain w-32"
            />
            <div>
              <Rating name="read-only" value={4} readOnly size="small" />
              <div className="flex 400px:gap-5 gap-1  400px:flex-row flex-col 400px:items-center mb-2">
                <h6>NasaTheme</h6>
                <p>-June 23, 2019</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                suscipit consequuntur in, perspiciatis laudantium ipsa fugit.
                Iure esse saepe error dolore quod.
              </p>
            </div>
          </div>

          <div className="flex gap-5 my-10">
            <img
              src="https://demo.themefisher.com/adrian-bootstrap/images/shop/avater-2.jpg"
              alt="avatar"
              className="max-w-full h-auto object-contain w-32"
            />
            <div>
              <Rating name="read-only" value={4} readOnly size="small" />
              <div className="flex 400px:flex-row flex-col 400px:gap-5 gap-1 400px:items-center mb-2">
                <h6>NasaTheme</h6>
                <p>-June 23, 2019</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                suscipit consequuntur in, perspiciatis laudantium ipsa fugit.
                Iure esse saepe error dolore quod.
              </p>
            </div>
          </div>
        </div>
        <div className="1000px:col-span-2 col-span-5">
          <h4 className="mb-4">Add a Review</h4>
          <Rating size="large" />
          <div className="flex flex-col gap-3">
            <MyInput placeholder={"Your Name"} />
            <MyInput placeholder={"Your Email"} />
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Message"
              className="650px:col-span-2 placeholder:text-slate-600 bg-lightGray text-black py-[0.375rem] px-[.75rem]  outline-none focus:border-sunsetOrange transitional border border-[#dee2e6]"
            ></textarea>
            <div className="1200px:pr-60 1000px:pr-48 650px:pr-96 450px:pr-60 400px:pr-48">
              <button className="btn btn2">Submit Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProductsOnSale = () => {
  return (
    <div className="respPx20 my-20">
      <h2 className="text-center font-bold">You May Like This </h2>
      <p className="text-center ">
        The best Online sales to shop these weekend
      </p>
      <div className="my-20 resp4ColGrid gap-8">
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/322.jpg"
          }
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/222.jpg"
          }
          name={"Kirby Shirt"}
          price={"329.10"}
          onSale
        />
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/222.jpg"
          }
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/322.jpg"
          }
          name={"Kirby Shirt"}
          price={"329.10"}
          onSale
        />
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/444.jpg"
          }
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/111.jpg"
          }
          name={"Kirby Shirt"}
          price={"329.10"}
          onSale
        />
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/322.jpg"
          }
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/222.jpg"
          }
          name={"Kirby Shirt"}
          price={"329.10"}
          onSale
        />
      </div>
    </div>
  );
};
