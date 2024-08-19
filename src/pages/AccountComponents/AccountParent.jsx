import React from "react";
import Sidebar from "./Sidebar";

const AccountParent = ({ children }) => {
  return (
    <div className="respPx20 my-20 grid grid-cols-4 gap-8">
      <Sidebar className={"850px:col-span-1 col-span-4"} />
      <div className="850px:col-span-3 col-span-4">{children}</div>
    </div>
  );
};

export default AccountParent;
