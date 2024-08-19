import React from "react";
import Hero from "../components/Hero";
import MyInput from "../components/MyInput";
import MySelect from "../components/MySelect";
import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
const Checkout = () => {
  return (
    <div>
      <Hero heading={"Checkout"} path={"Checkout"} />
      <div className="my-20 respPx20 grid grid-cols-12 gap-10">
        <div className="900px:col-span-8 500px:col-span-12     450px:col-span-11 400px:col-span-10 350px:col-span-9 col-span-8">
          <div className="py-4 px-4  bg-lightGray ">
            Have a coupon?{" "}
            <span className="text-sunsetOrange cursor-pointer">
              Click here to enter your code
            </span>
          </div>
          <div className="my-10">
            <h4>Billing Details</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="grid grid-cols-2 gap-8 my-5"
            >
              <div className="500px:col-span-1 col-span-2">
                <label htmlFor="fName">First Name</label>
                <MyInput placeholder={""} required={true} />
              </div>
              <div className="500px:col-span-1 col-span-2">
                <label htmlFor="lName">Last Name</label>
                <MyInput placeholder={""} required={true} />
              </div>
              <div className="col-span-2">
                <label htmlFor="companyName">Company Name(Optional)</label>
                <MyInput placeholder={""} required={true} />
              </div>
              <div className="col-span-2 ">
                <label htmlFor="#">Country</label>

                <MySelect
                  options={[
                    { text: "January", value: "jan" },
                    { text: "February", value: "feb" },
                    { text: "March", value: "mar" },
                    { text: "April", value: "apr" },
                    { text: "May", value: "may" },
                    { text: "June", value: "june" },
                  ]}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="street">Street Address</label>
                <MyInput placeholder={""} required={true} />
              </div>
              <div className="col-span-2">
                <label htmlFor="apt">
                  Apartment, suite, unit etc. (optional){" "}
                </label>
                <MyInput placeholder={""} required={true} />
              </div>{" "}
              <div className="col-span-2">
                <label htmlFor="apt">District</label>
                <MySelect
                  options={[
                    { text: "January", value: "jan" },
                    { text: "February", value: "feb" },
                    { text: "March", value: "mar" },
                    { text: "April", value: "apr" },
                    { text: "May", value: "may" },
                    { text: "June", value: "june" },
                  ]}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="postal">Postcode / ZIP (optional)</label>
                <MyInput placeholder={""} required={true} />
              </div>{" "}
              <div className="col-span-2">
                <label htmlFor="phone">Phone</label>
                <MyInput placeholder={""} required={true} />
              </div>{" "}
              <div className="col-span-2">
                <label htmlFor="email">Email Address</label>
                <MyInput placeholder={""} required={true} />
              </div>{" "}
              <div className="col-span-2 flex flex-col">
                <FormControlLabel
                  value="xLarge"
                  control={
                    <Checkbox
                      size="sm"
                      sx={{
                        color: "#FB5C42", // Color when unchecked
                        "&.Mui-checked": {
                          color: "#FB5C42", // Color when checked
                        },
                        "&:hover": {
                          backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
                        },
                      }}
                    />
                  }
                  label="Create an account?"
                  labelPlacement="end"
                />{" "}
                <FormControlLabel
                  value="xLarge"
                  control={
                    <Checkbox
                      size="sm"
                      sx={{
                        color: "#FB5C42", // Color when unchecked
                        "&.Mui-checked": {
                          color: "#FB5C42", // Color when checked
                        },
                        "&:hover": {
                          backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
                        },
                      }}
                    />
                  }
                  label="Ship to a different address?"
                  labelPlacement="end"
                />{" "}
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <label htmlFor="email">Order Notes (optional)</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Message"
                  className="650px:col-span-2 placeholder:text-slate-600 bg-lightGray text-black py-[0.375rem] px-[.75rem]  outline-none focus:border-sunsetOrange transitional border border-[#dee2e6]"
                ></textarea>
              </div>{" "}
            </form>
          </div>
        </div>
        <div className="900px:col-span-4 500px:col-span-12  450px:col-span-11 400px:col-span-10 350px:col-span-9 col-span-8">
          <h4 className="border-b border-lightGray pb-4">Order Summary</h4>
          <div className="my-4">
            <div className="flex justify-between">
              <p>Kirby Shirt</p>
              <span className="font-[600]">1 x $249</span>
            </div>
            <div className="flex justify-between  mt-5">
              <p>Subtotal</p>
              <span className="font-[600]">$190</span>
            </div>
            <div className="flex justify-between ">
              <p>Shipping</p>
              <span className="font-[600]">Free</span>
            </div>
            <div className="flex justify-between ">
              <p>Total</p>
              <span className="font-[600]">$250</span>
            </div>
          </div>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="directBankTransfer"
                control={<Radio size="small" />}
                label="Direct Bank Transfer"
              />{" "}
              <div className="bg-lightGray p-4 rounded my-2 mx-4">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </div>
              <FormControlLabel
                value="checkPayments"
                control={<Radio size="small" />}
                label="Check Payments"
              />
            </RadioGroup>
            <FormControlLabel
              value="xLarge"
              className="my-5"
              control={
                <Checkbox
                  size="medium"
                  sx={{
                    color: "#FB5C42", // Color when unchecked
                    "&.Mui-checked": {
                      color: "#FB5C42", // Color when checked
                    },
                    "&:hover": {
                      backgroundColor: "rgba(251, 92, 66, 0.1)", // Background color on hover
                    },
                  }}
                />
              }
              label="I have read and agree to the website terms and conditions *"
              labelPlacement="end"
            />{" "}
          </div>
          <div className="py-4 border-t border-lightGray">
            <p className="text-black">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <a href="#" className="text-sunsetOrange  ">
                {" "}
                privacy policy
              </a>
              .
            </p>
          </div>
          <button className="btn btn2">Place Holder</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
