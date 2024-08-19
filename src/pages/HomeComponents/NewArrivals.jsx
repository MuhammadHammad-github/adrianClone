import React from "react";
import ProductCard from "../../components/ProductCard";

const NewArrivals = () => {
  return (
    <div className="my-20 respPx20">
      <h2 className="text-center font-[600]">New Arrivals</h2>
      <p className="text-center">The best online sales to shop these weekend</p>
      <div className="resp4ColGrid gap-8 my-16">
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
    </div>
  );
};

export default NewArrivals;
