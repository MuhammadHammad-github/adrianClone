import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-lightGray respPx20 gap-y-10 py-20 grid 1100px:grid-cols-5 900px:grid-cols-4 650px:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-5 900px:col-span-2">
          <div>
            <img
              src="https://demo.themefisher.com/adrian-bootstrap/images/logo.png"
              alt="logo"
              className="max-w-full h-auto"
            />
          </div>
          <p className="text-[1.25rem]">
            Iste dolores iure quis excepturi, deserunt praesentium.
          </p>
          <div>
            <p>
              <span className="font-[700]">Location : </span>
              North South ,USA
            </p>{" "}
            <p>
              <span className="font-[700]">Support Email : </span>
              support@email.com
            </p>
          </div>
        </div>
        <HeadingAndLinks
          heading={"Category"}
          links={[
            { text: "Men's Fashion" },
            { text: "Women's Fashion" },
            { text: "Kids Fashion" },
            { text: "Accessories" },
            { text: "Shoe Collection" },
          ]}
        />{" "}
        <HeadingAndLinks
          heading={"Useful Link"}
          links={[
            { text: "News & Tips" },
            { text: "About Us" },
            { text: "Support" },
            { text: "Our Shop" },
            { text: "Contact Us" },
          ]}
        />
        <div className="flex flex-col gap-7 flex-grow">
          <h5>Opening Hours</h5>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between text-black">
              <p className="text-black">Monday-Friday</p>
              <p className="text-black">8.00-20.00</p>
            </div>
            <div className="flex justify-between text-black">
              <p className="text-black">Saturday</p>
              <p className="text-black">10.00-20.00</p>
            </div>
            <div className="flex justify-between text-black">
              <p className="text-black">Sunday</p>
              <p className="text-black">12-20.00</p>
            </div>
          </div>
          <h6>Call Now : +5(305) 785-0437</h6>
        </div>
      </div>
      <div className="respPx20 py-5 flex gap-x-10 gap-y-5 flex-wrap items-center justify-between">
        <p>
          Clone of{" "}
          <a
            href="https://demo.themefisher.com/adrian-bootstrap/"
            className="text-sunsetOrange"
          >
            Adrian
          </a>
          . Made By{" "}
          <a
            href="https://github.com/MuhammadHammad-github"
            target="_blank"
            className="text-sunsetOrange"
          >
            Muhammad Hammad
          </a>
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <a href="#" className="text-base min-w-max">
            Privacy Policy
          </a>
          <a href="#" className="text-base min-w-max">
            Terms & Conditions
          </a>
          <a href="#" className="text-base min-w-max">
            Cookie Policy
          </a>
          <a href="#" className="text-base min-w-max">
            Terms of Sale
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const HeadingAndLinks = ({ heading, links = [] }) => {
  return (
    <div className="flex flex-col gap-5">
      <h5>{heading}</h5>
      <div className="flex flex-col gap-4">
        {links.map((item, index) => {
          return (
            <a
              key={index}
              href="#"
              className="transitional text-gray hover:text-sunsetOrange "
            >
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};
