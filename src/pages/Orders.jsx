import React from "react";
import Hero from "../components/Hero";
import AccountParent from "./AccountComponents/AccountParent";

const Orders = () => {
  return (
    <div>
      <Hero heading={"Order"} path={"Order"} text="Order" />
      <AccountParent>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-borderColor border-collapse">
            <thead>
              <tr className="border-b border-borderColor">
                <th className=" p-2 text-left">Order</th>
                <th className=" p-2 text-left">Date</th>
                <th className=" p-2 text-left">Status</th>
                <th className=" p-2 text-left">Total</th>
                <th className=" p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                c1={1012}
                c2={"June 11, 2019"}
                c3={"Completed"}
                c4={"30"}
              />
              <TableRow
                c1={2214}
                c2={"March 10, 2019"}
                c3={"Completed"}
                c4={"50"}
              />
              <TableRow
                c1={3434}
                c2={"February 11, 2019"}
                c3={"Pending"}
                c4={"25"}
              />
              <TableRow
                c1={5312}
                c2={"July 11, 2019"}
                c3={"Processing"}
                c4={"56"}
              />
            </tbody>
          </table>
        </div>
      </AccountParent>
    </div>
  );
};

export default Orders;
const TableRow = ({ c1, c2, c3, c4 }) => {
  return (
    <tr className=" border-t border-borderColor">
      <td className="p-2 text-left font-[600] !min-w-max text-nowrap">#{c1}</td>
      <td className="p-2 text-left !min-w-max text-nowrap">{c2}</td>
      <td className="p-2 text-left !min-w-max text-nowrap">{c3}</td>
      <td className="p-2 text-left !min-w-max text-nowrap">${c4}</td>
      <td className="p-2 text-left !min-w-max text-nowrap">
        <button className="bg-slate-800 hover:bg-slate-950 text-white transition px-4 py-2 rounded">
          View
        </button>
      </td>
    </tr>
  );
};
