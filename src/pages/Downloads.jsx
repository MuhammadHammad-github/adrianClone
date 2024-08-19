import React from "react";
import Hero from "../components/Hero";
import AccountParent from "./AccountComponents/AccountParent";
import { useNavigate } from "react-router-dom";

const Downloads = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Hero heading={"Download"} path={"Download"} />
      <AccountParent>
        <div className="bg-borderColor flex gap-5 py-4 rounded px-4">
          <a
            href="#"
            onClick={() => navigate("/shop")}
            className="text-sunsetOrange text-base"
          >
            Go Shop
          </a>
          <p className="text-black">No downloads available yet.</p>
        </div>
      </AccountParent>
    </div>
  );
};

export default Downloads;
