import React, { useState } from "react";
import Hero from "../components/Hero";
import MySelect from "../components/MySelect";
import ProductCard from "../components/ProductCard";
import MyPagination from "./BlogsComponents/MyPagination";
import { Checkbox, FormControlLabel } from "@mui/material";
import RangeSlider from "./ShopComponents/RangeSlider";
import MiniProductCard from "../components/MiniProductCard";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
const Shop = () => {
  return (
    <div>
      <Hero heading={"Shop"} path={"Shop"} />
      <div className="grid grid-cols-12 respPx20 my-20 gap-5 relative">
        <Products />
        <SideBar />
      </div>
    </div>
  );
};

export default Shop;
const Products = () => {
  return (
    <div className="1000px:col-span-9 col-span-12">
      <h3>Shop</h3>
      <div className="my-2 flex justify-between w-full ">
        <p>Showing 1-16 of 17 results</p>
        <div>
          <MySelect
            options={[
              { text: "Sort By Popularity", value: "1" },
              { text: "Sort By Average Rating", value: "2" },
              { text: "Sort By Latest", value: "3" },
            ]}
          />
        </div>
      </div>
      <div className="my-10 resp3ColGrid gap-8">
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/322.jpg"
          }
          name={"Floral Kirby"}
          price={"329.10"}
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/444.jpg"
          }
          onSale
        />
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/222.jpg"
          }
          name={"Floral Kirby"}
          price={"329.10"}
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/322.jpg"
          }
        />
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/444.jpg"
          }
          name={"Floral Kirby"}
          price={"329.10"}
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/111.jpg"
          }
          onSale
        />
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/111.jpg"
          }
          name={"Floral Kirby"}
          price={"329.10"}
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/222.jpg"
          }
        />

        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/444.jpg"
          }
          name={"Floral Kirby"}
          price={"329.10"}
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/111.jpg"
          }
        />
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/322.jpg"
          }
          name={"Floral Kirby"}
          price={"329.10"}
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/444.jpg"
          }
        />
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/111.jpg"
          }
          name={"Floral Kirby"}
          price={"329.10"}
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/222.jpg"
          }
        />
        <ProductCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/222.jpg"
          }
          name={"Floral Kirby"}
          price={"329.10"}
          hoverImage={
            "https://demo.themefisher.com/adrian-bootstrap/images/shop/products/322.jpg"
          }
        />
      </div>
      <MyPagination />
    </div>
  );
};
const SideBar = () => {
  const [toggled, setToggled] = useState(false);
  const toggle = () => setToggled((prev) => !prev);
  return (
    <div
      className={`bg-white 1000px:col-span-3 1000px:static absolute px-2 top-0 1000px:w-auto 650px:w-1/2 w-[80%] transitional 1000px:shadow-none z-[1000] shadow-lg ${
        !toggled ? "650px:-left-1/2 -left-[80%]" : ""
      } left-0 `}
    >
      <div className="relative">
        <Categories />
        <div className="my-10 flex flex-col gap-4 ">
          <h4>Filter By Price</h4>
          <div className="pr-10">
            <RangeSlider num1={1} num2={1000} />
          </div>
        </div>
        <div
          onClick={() => {
            toggle();
          }}
          className="absolute top-1/2 -translate-y-1/2 400px:-right-[3.8rem] -right-[3rem]  border border-lightGray cursor-pointer 1000px:hidden border-l-0 shadow   bg-white rounded py-4 400px:p-2 p-1"
        >
          {toggled ? (
            <ChevronLeft className="!text-4xl" />
          ) : (
            <ChevronRight className="!text-4xl" />
          )}
        </div>
        <Colors />
        <div className="my-10">
          <h4>Shop By Sizes</h4>
          <div className="flex flex-col my-5 ">
            <FormControlLabel
              value="xLarge"
              control={
                <Checkbox
                  size="medium"
                  sx={{
                    color: "#FB5C42", // Color when unchecked
                    "&.Mui-checked": {
                      color: "#FB5C42", // Color when checked
                    },
                    "&:hover": {
                      backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
                    },
                  }}
                />
              }
              label="X Large"
              labelPlacement="end"
            />{" "}
            <FormControlLabel
              value="Large"
              control={
                <Checkbox
                  size="medium"
                  sx={{
                    color: "#FB5C42", // Color when unchecked
                    "&.Mui-checked": {
                      color: "#FB5C42", // Color when checked
                    },
                    "&:hover": {
                      backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
                    },
                  }}
                />
              }
              label="Large"
              labelPlacement="end"
            />{" "}
            <FormControlLabel
              value="medium"
              control={
                <Checkbox
                  size="medium"
                  sx={{
                    color: "#FB5C42", // Color when unchecked
                    "&.Mui-checked": {
                      color: "#FB5C42", // Color when checked
                    },
                    "&:hover": {
                      backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
                    },
                  }}
                />
              }
              label="Medium"
              labelPlacement="end"
            />{" "}
            <FormControlLabel
              value="small"
              control={
                <Checkbox
                  size="medium"
                  sx={{
                    color: "#FB5C42", // Color when unchecked
                    "&.Mui-checked": {
                      color: "#FB5C42", // Color when checked
                    },
                    "&:hover": {
                      backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
                    },
                  }}
                />
              }
              label="Small"
              labelPlacement="end"
            />
            <div className="my-5">
              <button className="btn btn3 ">Filter</button>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h4>Popular Products</h4>
          <div className="my-5 flex flex-col gap-5">
            <MiniProductCard
              name={<span className="font-[600]">Contrast Backpack</span>}
              price={45}
              image={
                "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-1.jpg"
              }
            />{" "}
            <MiniProductCard
              name={<span className="font-[600]">Hoodie With Logo</span>}
              price={45}
              image={
                "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-2.jpg"
              }
            />{" "}
            <MiniProductCard
              name={<span className="font-[600]">Traveler Backpack</span>}
              price={45}
              image={
                "https://demo.themefisher.com/adrian-bootstrap/images/shop/widget/p-3.jpg"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Colors = () => {
  return (
    <div className="my-10">
      <h4>Shop By Color</h4>
      <div className="flex my-4">
        <Checkbox
          className=""
          defaultChecked
          sx={{
            // padding: "20px",
            color: "red", // Color when unchecked
            "&.Mui-checked": {
              color: "red", // Color when checked
            },
            "&:hover": {
              backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
            },
            "& .MuiSvgIcon-root": {
              fontSize: 32, // Increase the size of the checkbox (optional)
            },
          }}
        />{" "}
        <Checkbox
          className=" "
          defaultChecked
          sx={{
            color: "green", // Color when unchecked
            "&.Mui-checked": {
              color: "green", // Color when checked
            },
            "&:hover": {
              backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
            },
            "& .MuiSvgIcon-root": {
              fontSize: 32, // Increase the size of the checkbox (optional)
            },
          }}
        />{" "}
        <Checkbox
          className=""
          defaultChecked
          sx={{
            color: "blue", // Color when unchecked
            "&.Mui-checked": {
              color: "blue", // Color when checked
            },
            "&:hover": {
              backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
            },
            "& .MuiSvgIcon-root": {
              fontSize: 32, // Increase the size of the checkbox (optional)
            },
          }}
        />{" "}
        <Checkbox
          className=""
          defaultChecked
          sx={{
            color: "black", // Color when unchecked
            "&.Mui-checked": {
              color: "black", // Color when checked
            },
            "&:hover": {
              backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
            },
            "& .MuiSvgIcon-root": {
              fontSize: 32, // Increase the size of the checkbox (optional)
            },
          }}
        />
        <Checkbox
          className=""
          defaultChecked
          sx={{
            color: "orange", // Color when unchecked
            "&.Mui-checked": {
              color: "orange", // Color when checked
            },
            "&:hover": {
              backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
            },
            "& .MuiSvgIcon-root": {
              fontSize: 32, // Increase the size of the checkbox (optional)
            },
          }}
        />
      </div>
    </div>
  );
};
const Categories = () => {
  return (
    <>
      <h4>Categories</h4>
      <details className="text-gray my-5 transitional w-full ">
        <summary className="text-sm text-black">Shoes (1138)</summary>

        <NestedLinks>
          <NestedLink text={"Women's (508)"} />
          <DoubleNestedLinks>
            <NestedLink text={"Sneakers"} />
            <NestedLink text={"Heels"} />
            <NestedLink text={"Loafers"} />
            <NestedLink text={"Sandals"} />
          </DoubleNestedLinks>
          <NestedLink text={"Men's (423)"} />
          <DoubleNestedLinks>
            <NestedLink text={"Boots"} />
            <NestedLink text={"Oxfords"} />
            <NestedLink text={"Loafers"} />
            <NestedLink text={"Sandals"} />
          </DoubleNestedLinks>
          <NestedLink text={"Boy's Shoes (423)"} />
          <NestedLink text={"Men's (423)"} />
        </NestedLinks>
      </details>
      <details className="text-gray my-5 transitional w-full ">
        <summary className="text-sm text-black">Clothing (2356)</summary>

        <NestedLinks>
          <NestedLink text={"Women's (508)"} />
          <DoubleNestedLinks>
            <NestedLink text={"Sneakers"} />
            <NestedLink text={"Heels"} />
            <NestedLink text={"Loafers"} />
            <NestedLink text={"Sandals"} />
          </DoubleNestedLinks>
          <NestedLink text={"Men's (423)"} />
          <DoubleNestedLinks>
            <NestedLink text={"Boots"} />
            <NestedLink text={"Oxfords"} />
            <NestedLink text={"Loafers"} />
            <NestedLink text={"Sandals"} />
          </DoubleNestedLinks>
          <NestedLink text={"Boy's Shoes (423)"} />
          <NestedLink text={"Men's (423)"} />
        </NestedLinks>
      </details>
      <details className="text-gray my-5 transitional w-full ">
        <summary className="text-sm text-black">Bags (420)</summary>

        <NestedLinks>
          <NestedLink text={"HandBags (508)"} />

          <NestedLink text={"Backpacks (423)"} />

          <NestedLink text={"Boy's Shoes (423)"} />
          <NestedLink text={"Men's (423)"} />
        </NestedLinks>
      </details>{" "}
      <details className="text-gray my-5 transitional w-full ">
        <summary className="text-sm text-black">Accessories (402)</summary>

        <NestedLinks>
          <NestedLink text={"HandBags (508)"} />

          <NestedLink text={"Backpacks (423)"} />

          <NestedLink text={"Boy's Shoes (423)"} />
          <NestedLink text={"Men's (423)"} />
        </NestedLinks>
      </details>
    </>
  );
};
const NestedLinks = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 ml-4 pl-4  text-[13px] my-2 border-l border-[#dee2e6]">
      {children}
    </div>
  );
};
const DoubleNestedLinks = ({ children }) => {
  return (
    <div className="flex flex-col gap-2  pl-4  text-[13px] my-0 border-l border-[#dee2e6]">
      {children}
    </div>
  );
};
const NestedLink = ({ text }) => {
  return (
    <span className="cursor-pointer  relative hover:text-sunsetOrange transitional ">
      {text}
      <span className="absolute top-2  -left-4 w-2 h-[2px]   bg-[#dee2e6]"></span>
    </span>
  );
};
