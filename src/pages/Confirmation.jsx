import React from "react";

const Confirmation = () => {
  return (
    <div className="respPx20 my-20">
      <h4>Thank You! For Your Payment</h4>
      <div className="my-10 border-y 1000px:bg-transparent bg-lightGray border-borderColor py-5 flex 1000px:flex-row flex-col gap-3 1000px:items-center 1000px:px-0 px-5">
        <div className="1000px:border-r border-dashed border-borderColor pr-12">
          <h6 className="uppercase !font-normal text-gray">Order Number:</h6>
          <h5>90</h5>
        </div>
        <div className="1000px:border-r border-dashed border-borderColor pr-12">
          <h6 className="uppercase !font-normal text-gray">Date:</h6>
          <h5>June 12, 2019</h5>
        </div>
        <div className="1000px:border-r border-dashed border-borderColor pr-12">
          <h6 className="uppercase !font-normal text-gray">Email:</h6>
          <h5>test@mail.com</h5>
        </div>
        <div className="1000px:border-r border-dashed border-borderColor pr-12">
          <h6 className="uppercase !font-normal text-gray">Total:</h6>
          <h5>$50</h5>
        </div>
        <div className="1000px:border-r border-dashed border-borderColor pr-12">
          <h6 className="uppercase !font-normal text-gray">
            Cash On Delivery:
          </h6>
          <h5>Cash on delivery</h5>
        </div>
      </div>
      <div>
        <button className="btn btn2 max-w-max px-10 !py-4">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
