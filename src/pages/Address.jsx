import React, { useState } from "react";
import AccountParent from "./AccountComponents/AccountParent";
import Hero from "../components/Hero";
import MyInput from "../components/MyInput";
import { Cancel } from "@mui/icons-material";

const Address = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      <Hero heading={"Address"} path={"Address"} />
      <AccountParent>
        {!edit ? (
          <div className="fadeIn">
            {" "}
            <p>
              The following addresses will be used on the checkout page by
              default.
            </p>
            <Card setEdit={setEdit} />
            <Card2 setEdit={setEdit} />
          </div>
        ) : (
          <div className="relative ">
            <div className="flex justify-between items-center">
              <h4>Edit Address</h4>
              <span onClick={() => setEdit(false)} className="cursor-pointer">
                <Cancel />
              </span>
            </div>
            <form
              className="grid grid-cols-2 gap-3 my-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="500px:col-span-1 col-span-2">
                <label htmlFor="#">Region</label>
                <MyInput placeholder={"Dhaka"} />
              </div>{" "}
              <div className="500px:col-span-1 col-span-2">
                <label htmlFor="#">City</label>
                <MyInput placeholder={"Dhaka - north"} />
              </div>{" "}
              <div className="flex flex-col col-span-2 my-2">
                <label htmlFor="#">Address</label>
                <textarea
                  name="Address"
                  id="Address"
                  rows="2"
                  placeholder="Address"
                  className="650px:col-span-2 placeholder:text-slate-600 bg-lightGray text-black py-[0.375rem] px-[.75rem]  outline-none focus:border-sunsetOrange transitional border border-[#dee2e6]"
                ></textarea>
              </div>
              <div className="500px:col-span-1 col-span-2">
                <button className="btn bg-slate-800 hover:bg-slate-950 transitional text-white max-w-max px-10 !py-4 !text-lg">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
      </AccountParent>
    </div>
  );
};

export default Address;
const Card = ({ setEdit }) => {
  return (
    <div className="p-5 border border-borderColor  rounded my-5">
      <div className="flex justify-between">
        <h4>Billing Info</h4>
        <a
          href="#"
          onClick={() => setEdit(true)}
          className="text-sunsetOrange font-semibold  text-2xl"
        >
          Edit
        </a>
      </div>
      <div className="my-4">
        <h6 className="font-normal">Jonathan Smith</h6>
        <h6 className="font-normal">1491 Patterson Street</h6>
        <h6 className="font-normal">Houston</h6>
        <h6 className="font-normal">Texas</h6>
      </div>
    </div>
  );
};
const Card2 = ({ setEdit }) => {
  return (
    <div className="p-5 border border-borderColor  rounded my-5">
      <div className="flex justify-between">
        <h4>Shipping Info</h4>
        <a
          href="#"
          onClick={() => setEdit(true)}
          className="text-sunsetOrange font-semibold  text-2xl"
        >
          Edit
        </a>
      </div>
      <div className="my-4">
        <p className="text-black">
          You have not set up this type of address yet.
        </p>
      </div>
    </div>
  );
};
