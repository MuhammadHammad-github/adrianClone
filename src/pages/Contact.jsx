import React from "react";
import Hero from "../components/Hero";
import { Home, Mail, Phone } from "@mui/icons-material";
import MyInput from "../components/MyInput";
const Contact = () => {
  return (
    <div>
      <Hero heading={"Contact Us"} path={"Contact Us"} />
      <div className="grid 1000px:grid-cols-2 grid-cols-1 gap-5   respPx20 my-20">
        <div className="flex flex-col gap-5">
          <h3>Our Company</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quo
            quia cupiditate, dolore possimus quidem maxime, neque beatae. Fuga
            maxime quos recusandae ratione earum atque, quam sunt dolorem illum
            dolor.
          </p>
          <div className="grid 650px:grid-cols-2 grid-cols-1">
            <div className="my-5">
              <h4>Corporate Office</h4>
              <div className="my-5 flex flex-col gap-3">
                <div className="flex gap-4 items-center">
                  <Home />
                  <p className="text-black">Khaja Road, Bayzid, Bangladesh</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone />
                  <p className="text-black">+880-31-000-000</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail />
                  <p className="text-black">hello@example.com</p>
                </div>
              </div>
            </div>
            <div className="my-5">
              <h4>Branch Office</h4>
              <div className="my-5 flex flex-col gap-3">
                <div className="flex gap-4 items-center">
                  <Home />
                  <p className="text-black">184 Street Victoria 8007</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone />
                  <p className="text-black">+880-31-000-000</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail />
                  <p className="text-black">hello@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-5">
            <h3>Send us an Email:</h3>
            <div className="grid 650px:grid-cols-2 grid-cols-1 gap-8 gap-y-4">
              <MyInput placeholder={"Your Name"} required={true} />
              <MyInput placeholder={"Your Email"} required={true} />
              <MyInput placeholder={"Subject"} required={true} />
              <MyInput placeholder={"Phone"} required={true} />
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Message"
                className="650px:col-span-2 placeholder:text-slate-600 bg-lightGray text-black py-[0.375rem] px-[.75rem]  outline-none focus:border-sunsetOrange transitional border border-[#dee2e6]"
              ></textarea>
            </div>
            <div className="">
              <button className="btn btn3">Send Message</button>
            </div>
          </div>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7221.821008725687!2d55.399396394807724!3d25.17249957086612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6134f2738a19%3A0xad44edc23264ed41!2sWarsan%20-%20England%20Cluster%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1723820302921!5m2!1sen!2s"
        className="w-full min-h-[40vh]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
