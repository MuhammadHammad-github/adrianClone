import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="my-20 respPx20">
      <div className="900px:w-[50%] 750px:w-[60%] 650px:w-[70%] 550px:w-[80%] 450px:w-[90%] w-full border border-borderColor p-10 450px:px-10 px-5 mx-auto">
        <h1 className="font-[400] text-center text-5xl">Login</h1>
        <p className="text-lg text-center my-5">
          Don't Have an account?{" "}
          <a
            href="#"
            onClick={() => navigate("/signUp")}
            className="text-sunsetOrange"
          >
            Create a free account
          </a>
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-20">
          <div className="flex flex-col gap-3">
            <label htmlFor="username">Enter username</label>
            <input
              type="text"
              id="username"
              className="py-3 px-3 outline-none border border-borderColor focus:border-sunsetOrange transitional"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="flex my-7 flex-col gap-3">
            <div className="flex justify-between">
              <label htmlFor="password">Enter Password</label>
              <a
                href="#"
                className="text-sunsetOrange"
                onClick={() => navigate("/forgotPassword")}
              >
                Forgot Password?
              </a>
            </div>
            <input
              type="text"
              id="password"
              className="py-3 px-3 outline-none border border-borderColor focus:border-sunsetOrange transitional"
              placeholder="Enter Password"
              required
            />
          </div>
          <button className="btn btn2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
