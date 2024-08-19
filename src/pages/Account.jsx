import React from "react";
import Hero from "../components/Hero";
import AccountParent from "./AccountComponents/AccountParent";
import MyInput from "../components/MyInput";

const Account = () => {
  return (
    <div>
      <Hero heading={"Account"} path={"Account"} />
      <AccountParent>
        <h4>Account Information</h4>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-2 gap-3 my-5"
        >
          <div className="500px:col-span-1 col-span-2">
            <label htmlFor="#">First Name</label>
            <MyInput placeholder={"John"} />
          </div>{" "}
          <div className="500px:col-span-1 col-span-2">
            <label htmlFor="#">Last Name</label>
            <MyInput placeholder={"Smith"} />
          </div>{" "}
          <div className="flex flex-col col-span-2 my-2">
            <label htmlFor="#">Display Name</label>
            <MyInput placeholder={"JohnS"} />
            <p className="my-2">
              This will be how your name will be displayed in the account
              section and in reviews
            </p>
          </div>
          <div className="flex flex-col col-span-2 my-2">
            <label htmlFor="#">Email address</label>
            <MyInput placeholder={"test@email.com"} />
          </div>
          <div className="flex flex-col col-span-2 my-5">
            <h4>Password change</h4>
          </div>
          <div className="flex flex-col col-span-2 my-2">
            <label htmlFor="#">Current password</label>
            <MyInput placeholder={""} />
          </div>{" "}
          <div className="flex flex-col col-span-2 my-2">
            <label htmlFor="#">New password</label>
            <MyInput placeholder={""} />
          </div>{" "}
          <div className="flex flex-col col-span-2 my-2">
            <label htmlFor="#">Confirm password</label>
            <MyInput placeholder={""} />
          </div>
          <div className="500px:col-span-1 col-span-2">
            <button className="btn bg-slate-800 hover:bg-slate-950 transitional text-white max-w-max px-10 !py-4 !text-lg">
              Save Changes
            </button>
          </div>
        </form>
      </AccountParent>
    </div>
  );
};

export default Account;
