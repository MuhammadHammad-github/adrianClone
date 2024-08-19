import React from "react";

const ForgotPassword = () => {
  return (
    <div className="my-20 respPx20">
      <div className="900px:w-[50%] 750px:w-[60%] 650px:w-[70%] 550px:w-[80%] 450px:w-[90%] w-full border border-borderColor p-10 450px:px-10 px-5 mx-auto">
        <h3 className="font-[600] text-[1.9rem] text-center ">
          Password Recovery{" "}
        </h3>
        <p className="text-lg text-center my-5">
          Please enter the email address for your account. A verification code
          will be sent to you. Once you have received the verification code, you
          will be able to choose a new password for your account.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-20">
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="email">Enter Email Address</label>
            <input
              type="text"
              id="email"
              className="py-3 px-3 outline-none border border-borderColor focus:border-sunsetOrange transitional"
              placeholder="Enter Email Address"
              required
            />
          </div>

          <button className="btn btn2">Request OTP</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
