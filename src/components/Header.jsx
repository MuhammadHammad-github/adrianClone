import {
  Cancel,
  CancelOutlined,
  CancelSharp,
  Menu,
  Person,
  Remove,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();
  const links = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    {
      text: "pages",
      link: "#",
      subLinks: [
        { text: "Blog", link: "/blog" },
        { text: "Blog Single", link: "/blogSingle" },
        { text: "404 Page", link: "/404" },
        { text: "FAQ", link: "/faq" },
      ],
    },
    {
      text: "shop",
      link: "#",
      subLinks: [
        { text: "Shop", link: "/shop" },
        { text: "Product Details", link: "/productDetails" },
        { text: "checkout", link: "/checkout" },
        { text: "cart", link: "/cart" },
        { text: "confirmation", link: "/confirmation" },
      ],
    },
    {
      text: "account",
      link: "#",
      subLinks: [
        { text: "dashboard", link: "/dashboard" },
        { text: "orders", link: "/orders" },
        { text: "downloads", link: "/downloads" },
        { text: "address", link: "/address" },
        { text: "profile details", link: "/account" },
        { text: "login page", link: "/login" },
        { text: "SignUp Page", link: "/signUp" },
        { text: "forgot password", link: "/forgotPassword" },
      ],
    },
    { text: "Contact Us", link: "/contact" },
  ];
  return (
    <header
      className={`respPx20   relative py-10 flex 1000px:flex-row flex-col 1000px:h-auto h-[113px] transition-all duration-300 ease-in-out ${
        toggled && "1000px:!h-auto !h-[560px]"
      } 1000px:items-center w-full justify-between`}
    >
      <div>
        <img
          onClick={() => navigate("/")}
          src="https://demo.themefisher.com/adrian-bootstrap/images/logo.png"
          alt="logo"
          className="max-w-full h-auto cursor-pointer "
        />
      </div>
      <div
        className="border rounded p-1 absolute top-10 right-5 border-gray 1000px:hidden cursor-pointer"
        onClick={() => {
          setToggled((prev) => !prev);
        }}
      >
        <Menu className="text-gray" />
      </div>
      <nav
        className={`flex 1000px:flex-row  flex-col gap-10 1000px:my-0 my-10 transitional 1000px:items-center 1000px:pointer-events-auto ${
          !toggled &&
          "pointer-events-none 1000px:pointer-events-auto -z-50  opacity-0 1000px:opacity-100 1000px:z-50"
        } `}
      >
        {links.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative flex items-stretch h-full"
            >
              <a
                onClick={() => {
                  navigate(item.link);
                }}
                className="cursor-pointer !capitalize h-full  transitional hover:text-sunsetOrange font-[600] "
              >
                {item.text}
                {item.link === "#" && "."}
              </a>
              {item.link === "#" && (
                <div className="flex bg-white flex-col gap-4 absolute border-t-4 border-t-sunsetOrange  !z-50 pointer-events-none top-20 opacity-0 min-w-max 1000px:w-[400%] w-1/2 group-hover:opacity-100 group-hover:top-7 group-hover:pointer-events-auto p-4 shadow-md transition-all duration-300 ease-in-out">
                  {item.subLinks.map((subItem, subIndex) => {
                    return (
                      <a
                        key={subIndex}
                        onClick={() => {
                          navigate(subItem.link);
                        }}
                        className="!cursor-pointer !capitalize text-black  transitional hover:text-white hover:bg-black px-4 py-2 !text-base"
                      >
                        {subItem.text}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      <div
        className={`flex gap-3 1000px:pointer-events-auto transitional ${
          !toggled &&
          "pointer-events-none 1000px:pointer-events-auto opacity-0 1000px:opacity-100 -z-50  1000px:z-50"
        } `}
      >
        <div className="bg-lightGray rounded-full px-2 py-1 cursor-pointer">
          <Search className="!text-lg" />
        </div>
        <div className="group relative">
          <div className="bg-lightGray rounded-full px-2 py-1 cursor-pointer">
            <ShoppingCart className="!text-lg" />
          </div>
          <MiniCart />
        </div>
        <div className="bg-lightGray rounded-full px-2 py-1 cursor-pointer">
          <Person className="!text-lg " />
        </div>
      </div>
    </header>
  );
};

export default Header;

const MiniCart = () => {
  return (
    <div className="absolute z-50 bg-white border-t-4 border-sunsetOrange shadow-md py-10 px-5 1000px:w-[500%]  min-w-max 1000px:!right-0 -right-[600%]   top-20 pointer-events-none opacity-0 transitional  group-hover:opacity-100 group-hover:pointer-events-auto  group-hover:top-9 ">
      <CartItem image={1} heading={"Ladies Bag"} />
      <CartItem image={2} heading={"Skinny Jeans"} />
      <div className="flex justify-between my-2">
        <h6>Total:</h6>
        <h6>$1799.00</h6>
      </div>
      <div className="flex flex-col gap-3 my-4">
        <a href="#" className="btn1 btn">
          View Cart
        </a>
        <a href="#" className="btn2 btn">
          Checkout
        </a>
      </div>
    </div>
  );
};
const CartItem = ({ image, heading }) => {
  return (
    <div className="flex gap-10 items-start justify-between border-b border-b-lightGray  py-4">
      <div className="flex gap-3">
        <div>
          <img
            src={`https://demo.themefisher.com/adrian-bootstrap/images/shop/cart/cart-${image}.jpg`}
            className="max-w-full h-auto w-14"
            alt="cartProduct"
          />
        </div>
        <div>
          <h6>{heading}</h6>
          <p className="text-xs">1 x 1250.00</p>
        </div>
      </div>
      <div className=" p-2 rounded-full cursor-pointer">
        <CancelOutlined className="" />
      </div>
    </div>
  );
};
