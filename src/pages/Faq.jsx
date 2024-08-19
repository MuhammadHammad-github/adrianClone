import React from "react";
import Hero from "../components/Hero";

const Faq = () => {
  return (
    <div>
      <Hero
        heading={"Frequently Asked Questions"}
        path={"Frequently Asked Questions"}
        text="support@gmail.com"
      />
      <div className="respPx20 my-20 grid 950px:grid-cols-2 grid-cols-1 gap-8">
        <Question
          heading={"Order Status"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto, alias, tempora fuga quam eveniet neque excepturi aliquid. Eligendi, mollitia"
          }
        />
        <Question
          heading={"Returns & Exchanges"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque nam, ab voluptas et debitis sint hic vel ratione dignissimos."
          }
        />
        <Question
          heading={"Shipping & Delivery"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatibus, incidunt similique nobis sint quisquam nam ab error consequuntur sit ullam ex eum exercitationem, excepturi explicabo beatae eos aspernatur odit ad perspiciatis, neque saepe magni enim. Maiores quia, quae sequi."
          }
        />
        <Question
          heading={"Privacy Policy"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis quod saepe, inventore ipsum sint cum iste quae ratione nobis laborum minima autem totam similique, quia neque deleniti! Provident, suscipit."
          }
        />
        <Question
          heading={"Payments"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus repellat id, laboriosam ipsa repudiandae quisquam, suscipit officiis, praesentium itaque facilis distinctio dolorum. Velit reiciendis libero laudantium corporis, delectus impedit sunt."
          }
        />
        <Question
          heading={"Refund Policy"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis quod saepe, inventore ipsum sint cum iste quae ratione nobis laborum minima autem totam similique, quia neque deleniti! Provident, suscipit."
          }
        />
      </div>
    </div>
  );
};

export default Faq;
const Question = ({ heading, text }) => {
  return (
    <div className="">
      <h4 className="border-b border-[#dee2e6] py-2 my-2">{heading}</h4>
      <p>{text}</p>
    </div>
  );
};
