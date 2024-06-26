import React from "react";
import logo from "../../../src/assets/fedex.png";
import { FaRegUserCircle } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import bgimg from "../../assets/bgimg.jpg";
import { BsCalculatorFill } from "react-icons/bs";
import { RiGiftFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

const Module = () => {
  return (
    <div className="relative w-full h-auto">
      {""}
      {/* Container with relative positioning and flexible height */}
      <ul className="flex flex-wrap text-xl md:text-2xl space-x-6 md:space-x-11 p-4 bg-violet-800 text-white list-none w-full">
        {" "}
        {/* Responsive layout */}
        <li className="w-auto md:w-16">
          {" "}
          {/* Responsive width for logo */}
          <img width="70px" src={logo} alt="logo" />
        </li>
        <li className="flex items-center w-auto">
          Shipping <MdOutlineKeyboardArrowDown />
        </li>
        <li className="flex items-center w-auto">
          Tracking <MdOutlineKeyboardArrowDown />
        </li>
        <li className="flex items-center w-auto">
          Design & Print <MdOutlineKeyboardArrowDown />
        </li>
        <li className="flex items-center w-auto">
          Locations <MdOutlineKeyboardArrowDown />
        </li>
        <li className="flex items-center w-auto">
          Support <MdOutlineKeyboardArrowDown />
        </li>
        <li className="flex items-center w-auto">
          SignUp or Login <MdOutlineKeyboardArrowDown />
        </li>
        <li>
          <FaRegUserCircle />
        </li>
        <li>
          <RiSearchLine />
        </li>
      </ul>
      <main className="relative w-full h-96">
        {" "}
        {/* Defined height for main content */}
        <img
          className="absolute inset-0 w-full h-74 object-cover" /* Absolute positioning for background image */
          src={bgimg}
          alt="bgimg"
        />
        <header className="relative z-10 p-4 md:p-8 text-white text-center">
          {" "}
          {/* Content over the image */}
          <h1 className="text-2xl md:text-6xl text-black mt-16">
            Ship, Manage, Track, Deliver
          </h1>{" "}
          {/* Responsive text size */}
          <div className="flex justify-center  items-center h-screen relative bottom-60 text-xl font-bold">
            <div className="flex flex-col w-40 h-40 text-black text-justify bg-white items-center justify-center rounded-lg">
              <BsCalculatorFill /> RATE&SHIP{" "}
            </div>
            <div className="flex flex-col justify-center items-center  w-52 h-52 text-justify bg-violet-700 text-white rounded-lg">
              <RiGiftFill /> TRACK
            </div>
            <div className="flex flex-col  w-40 h-40 text-black  text-justify bg-white items-center justify-center rounded-lg">
              <FaLocationDot /> LOCATIONS
            </div>
          </div>
          <div className="flex text-black absolute top-64 right-24 text-center justify-center items-center mt-64">
            <input
              className="flex-row w-500px h-20"
              type="text"
              placeholder="TRACKING ID"
            />
            <button className="flex-row w-40 h-20 font-medium bg-orange-800">
              TRACK
            </button>
          </div>
       
        </header>
        <p className="text-black absolute inset-y-0 inset-128 -bottom-34  font-bold text-xl">
  MULTIPLE TRACKING NUMBERS | NEED HELP?
</p>
      </main>
    </div>
  );
};

export default Module;
