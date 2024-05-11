import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className=" border-b border-[#161616cc]">
      <div className="max-w-screen-3xl mx-auto flex justify-between items-center h-20 p-8 bg-stone-600 text-white">
        {/* Logo */}
        <h3 className="font-bold text-3xl">
          Sneaker <span className="italic font-bodoni font-medium">Life</span>
        </h3>
        {/* Menu Items */}
        <ul className="hidden md:flex justify-center items-center gap-2">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>

          <button className="px-6 py-4 bg-white text-black rounded-full hover:bg-[#e4e4e4cc]">
            Enquire
          </button>
        </ul>
        {/* Hamburger Menu */}
        <div
          onClick={handleClick}
          className="md:hidden text-2xl z-50 text-white"
        >
          {!nav ? <IoMdMenu /> : <FaTimes />}
        </div>
        {/* Menu Dropdown */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#e4e4e4] z-20"
          }
        >
          <li className="text-4xl py-6">Home</li>
          <li className="text-4xl py-6">About</li>
          <li className="text-4xl py-6">Destinations</li>
          <li className="text-4xl py-6">Contact</li>

          <button className="px-4 py-2 bg-black text-white rounded-full">
            Enquire
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
