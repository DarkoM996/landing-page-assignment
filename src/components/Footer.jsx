import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdFax, MdHouse, MdLocalPhone, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="max-w-screen-3xl mx-auto h-full px-6 py-4 bg-[#1b1a18] text-white">
      <div className="flex items-center justify-center border-b-2 border-stone-800 p-6 dark:border-stone-400 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span className="text-xl">
            Get Connected with us on social media:
          </span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl mr-2">
            <FaInstagramSquare />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaFacebook />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaYoutube />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaTwitter />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaPinterest />
          </a>
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Logo Name Section --> */}
          <div className="">
            <h2 className="text-4xl mb-4 flex items-center justify-center font-semibold  md:justify-start">
              Sneaker{" "}
              <span className="italic font-medium font-bodoni">Life</span>
            </h2>
            <p className="text-[#a8a49c]">
              Experience comfort in style with us and our variety of our brands
              such as Nike, Adidas, Puma, Kappa and many others. Join us and
              become a member of growing base of happy customers.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h4 className="mb-4 text-3xl flex justify-center font-medium md:justify-start">
              Products
            </h4>
            <p className="mb-4">
              <a className="text-[#bebab2]">Nike AirMax</a>
            </p>
            <p className="mb-4">
              <a className="text-[#bebab2] ">Puma x Dazed</a>
            </p>
            <p className="mb-4">
              <a className="text-[#bebab2] ">AirJordan12</a>
            </p>
            <p>
              <a className="text-[#bebab2] ">AdidasPro</a>
            </p>
          </div>
          {/* <!-- Useful Links --> */}
          <div className="">
            <h4 className="mb-4 text-3xl flex justify-center font-medium md:justify-start">
              Useful Links
            </h4>
            <p className="mb-4">
              <a className="text-[#bebab2]">Products</a>
            </p>
            <p className="mb-4">
              <a className="text-[#bebab2]">About</a>
            </p>
            <p className="mb-4">
              <a className="text-[#bebab2]">Contact</a>
            </p>
            <p>
              <a className="text-[#bebab2]">Instagram</a>
            </p>
          </div>
          {/* <!-- Contact --> */}
          <div className="">
            <h4 className="mb-4 text-3xl flex justify-center font-medium  md:justify-start">
              Products
            </h4>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdHouse className="text-2xl mr-1" />
              <a className="text-[#bebab2]">New York, NY 10012, US</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdMail className="text-2xl mr-1" />
              <a className="text-[#bebab2]">sneakerlife@contact.com</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdLocalPhone className="text-2xl mr-1" />
              <a className="text-[#bebab2]">+ 01 234 567 88</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdFax className="text-2xl mr-1" />
              <a className="text-[#bebab2]">+ 01 234 567 89</a>
            </p>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="p-6 text-center text-[#bebab2] ">
        <span>© 2024 Copyright:</span>
        <a href="/" className="text-[#bebab2] ml-1">
          Sneaker <span className="italic font-bodoni font-medium">Life</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
