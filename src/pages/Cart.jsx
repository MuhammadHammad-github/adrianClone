import React from "react";
import Hero from "../components/Hero";
import MyInput from "../components/MyInput";
const Cart = () => {
  return (
    <div>
      <Hero heading={"Cart"} path={"Cart"} />
      <div className="respPx20 my-20">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-borderColor text-left">
            <thead>
              <tr className="border-b border-borderColor">
                <th className="p-2">Image</th>
                <th className="p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-borderColor">
                <td className="p-2">
                  <img
                    src="https://demo.themefisher.com/adrian-bootstrap/images/shop/cart/cart-1.jpg"
                    alt="cartImg"
                    className="max-w-full h-auto object-contain w-20"
                  />
                </td>
                <td className="p-2">
                  <h6>Trendy Cloth</h6>
                </td>
                <td className="p-2">
                  <h6>$90.00</h6>
                </td>
                <td className="p-2">
                  <input
                    type="number"
                    min={1}
                    className="py-2 outline-none border border-borderColor px-2 w-16"
                  />
                </td>
                <td className="p-2">
                  <h6>$90.00</h6>
                </td>
              </tr>
              <tr className="border-b border-borderColor">
                <td className="p-2">
                  <img
                    src="https://demo.themefisher.com/adrian-bootstrap/images/shop/cart/cart-2.jpg"
                    alt="cartImg"
                    className="max-w-full h-auto object-contain w-20"
                  />
                </td>
                <td className="p-2">
                  <h6>Sunglasses</h6>
                </td>
                <td className="p-2">
                  <h6>$90.00</h6>
                </td>
                <td className="p-2">
                  <input
                    type="number"
                    min={1}
                    className="py-2 outline-none border border-borderColor px-2 w-16"
                  />
                </td>
                <td className="p-2">
                  <h6>$90.00</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-2 flex gap-5 650px:flex-row flex-col 650px:items-center  w-full justify-between border border-borderColor">
          <div className="flex 450px:flex-row flex-col gap-4 1000px:w-1/2 650px:w-3/4 w-full ">
            <MyInput placeholder={"Coupon Code"} />
            <button className="btn btn3 min-w-max 450px:w-auto !w-full">
              Apply Coupon
            </button>
          </div>
          <div className="">
            <button className="btn btn2 px-4 w-full">Update Cart</button>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="my-20 p-5  border border-borderColor 950px:w-1/3 550px:w-1/2 450px:w-3/4 w-full">
            <h4 className="font-[700]">Cart Totals</h4>
            <div className="flex my-4 justify-between py-2 border-b border-borderColor">
              <p className="font-normal text-xl text-black">Subtotal </p>
              <h6 className="font-[800]">$90.00</h6>
            </div>
            <div className="flex my-4 justify-between py-2 border-b  border-borderColor">
              <p className="font-normal text-xl text-black">Shipping </p>
              <h6 className="font-[800]">Free</h6>
            </div>
            <div className="flex my-4 justify-between py-2 border-b border-borderColor">
              <p className="font-normal text-xl text-black">Total</p>
              <h6 className="font-[800]">$90.00</h6>
            </div>
            <button className="btn btn2">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
