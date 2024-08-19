import {
  AccessTime,
  AccessTimeFilled,
  AccessTimeOutlined,
  Key,
  KeyOutlined,
  LocalShipping,
  LocalShippingOutlined,
  LockClock,
  Money,
  MoneyOff,
  MoneyOutlined,
  PedalBike,
  WalletOutlined,
  Watch,
} from "@mui/icons-material";
import React from "react";

const Features = () => {
  return (
    <div className="border-t border-slate-300 py-10 mt-20 ">
      <div className="respPx20 resp4ColGrid gap-5">
        <Feature
          icon={
            <LocalShippingOutlined className="!text-4xl text-sunsetOrange" />
          }
          heading={"Free Shipping"}
          text={"On all order over $39.00"}
        />{" "}
        <Feature
          icon={<WalletOutlined className="!text-4xl text-sunsetOrange" />}
          heading={"30 Days Return"}
          text={"Money back Guarantee"}
        />{" "}
        <Feature
          icon={<KeyOutlined className="!text-4xl text-sunsetOrange" />}
          heading={"Secure Checkout"}
          text={"100% Protected by paypal"}
        />{" "}
        <Feature
          icon={<AccessTimeOutlined className="!text-4xl text-sunsetOrange" />}
          heading={"24/7 Support"}
          text={"All time customer support"}
        />
      </div>
    </div>
  );
};

export default Features;
const Feature = ({ icon, heading, text }) => {
  return (
    <div className="flex items-center gap-5">
      <div>{icon}</div>
      <div>
        <h5>{heading}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};
