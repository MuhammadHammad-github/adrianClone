import React from "react";
import Sidebar from "./AccountComponents/Sidebar";
import Hero from "../components/Hero";
import AccountParent from "./AccountComponents/AccountParent";
const Dashboard = () => {
  return (
    <div>
      <Hero heading={"Dashboard"} path={"Dashboard"} />

      <AccountParent>
        <p>
          Hello User (not User?{" "}
          <a href="#" className="text-sunsetOrange text-base">
            Log out
          </a>{" "}
          )
        </p>
        <p className="my-5 text-black">
          From your account dashboard you can view your{" "}
          <a href="#" className="text-sunsetOrange">
            recent orders
          </a>
          , manage your{" "}
          <a href="#" className="text-sunsetOrange">
            {" "}
            shipping and billing addresses
          </a>{" "}
          and{" "}
          <a href="#" className="text-sunsetOrange">
            {" "}
            edit your password and account details
          </a>
          .
        </p>
      </AccountParent>
    </div>
  );
};

export default Dashboard;
