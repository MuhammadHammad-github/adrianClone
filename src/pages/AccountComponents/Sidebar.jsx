import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const links = [
    { text: "dashboard", link: "/dashboard" },
    { text: "orders", link: "/orders" },
    { text: "downloads", link: "/downloads" },
    { text: "address", link: "/address" },
    { text: "account", link: "/account" },
  ];
  return (
    <div className={`${className} flex flex-col `}>
      {links.map((item, index) => {
        return (
          <a
            href="#"
            key={index}
            onClick={() => navigate(item.link)}
            className={` py-3 px-5 capitalize border border-borderColor font-[600] text-base  ${
              pathname === item.link && "bg-sunsetOrange text-white"
            } ${index !== 0 && "border border-borderColor"} `}
          >
            {item.text}
          </a>
        );
      })}
      <a
        href="#"
        className={` py-3 px-5 capitalize font-[600] text-base  border border-borderColor `}
      >
        Logout
      </a>
    </div>
  );
};

export default Sidebar;
