import React from "react";
import logo from "../../../src/assets/fedex.png";
import { FaRegUserCircle } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import bgimg from "../../assets/bgimg.jpg";

const Module = () => {
  return (
    <div className="relative w-full h-auto">
      {" "}
      {/* Container with relative positioning and flexible height */}
      <ul className="flex flex-wrap text-xl md:text-2xl space-x-6 md:space-x-12 p-4 bg-violet-800 text-white list-none w-full">
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
          <h1 className="text-2xl md:text-5xl text-black mt-16">
            Ship, Manage, Track, Deliver
          </h1>{" "}
          {/* Responsive text size */}
          <div>RATE & SHIP </div>
          <div>TRACK</div>
          <div>LOCATIONS</div>
        </header>
      </main>
    </div>
  );
};

export default Module;
