import React from "react";

const WhatWeDo = () => {
  return (
    <div className="respPx20 my-20 resp3ColGrid gap-10">
      <Card
        image={
          "https://demo.themefisher.com/adrian-bootstrap/images/about/about-3.jpg"
        }
        heading={"Our Mission"}
      />
      <Card
        image={
          "https://demo.themefisher.com/adrian-bootstrap/images/about/about-2.jpg"
        }
        heading={"Our Vision"}
      />
      <Card
        image={
          "https://demo.themefisher.com/adrian-bootstrap/images/about/about-1.jpg"
        }
        heading={"Statement"}
      />
    </div>
  );
};

export default WhatWeDo;
const Card = ({ image, heading }) => {
  return (
    <div>
      <div>
        <img
          src={image}
          alt="what we do image  "
          className="max-w-full h-auto"
        />
      </div>
      <div className="my-4 flex flex-col  gap-2">
        <h5>{heading}</h5>
        <p>
          Praesent blandit dolorhon quam. In vemi sit amet augue congue
          elementum. Morbi in ipsum sit amet pede facilisis laoreet.
        </p>
      </div>
    </div>
  );
};
