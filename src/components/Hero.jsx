import React from "react";
import hero from "../images/hero.jpg";

const Hero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative h-screen">
      {/* Image full width of screen */}
      <div className="h-full">
        <img
          src={hero}
          alt="hero image"
          className="object-cover bg-center w-[1920px] h-full"
        />
      </div>
      {/* Call to Action.. Walk anywhere in style with us as an alternative h1 */}
      <div className="flex flex-col justify-center items-center absolute top-0 left-0 right-0 w-full h-full gap-4 bg-black/40 ">
        <div className="flex flex-col justify-center items-center gap-2 ">
          <p className="text-white text-transform: uppercase">Join Us</p>
          <h1 className="text-white text-center text-4xl md:text-5xl font-bold pb-4">
            Experience Comfort{" "}
            <span className="italic font-bodoni font-medium">In Style</span>{" "}
            <br />
            With Us
          </h1>
          <div className="flex flex-col md:flex-row  justify-center items-center w-1/2 gap-4">
            <button className="p-4 bg-black text-white rounded-full w-full">
              Get Started
            </button>
            <button className="p-4 bg-white text-black rounded-full w-full">
              Scroll Down
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
