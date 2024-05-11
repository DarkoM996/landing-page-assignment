import React from "react";

const PopularProduct = ({ img, title, subtitle }) => {
  return (
    <div className="relative flex flex-col justify-between h-auto w-full">
      <div className="overflow-hidden inline-block rounded-xl">
        <img
          src={img}
          alt="/"
          className="object-cover bg-center w-[520px] h-[520px] rounded-2xl hover:scale-110 duration-500 transition-transform"
        />
      </div>
      <div className="absolute top-0 left-0 right-0  rounded-2xl text-black w-full h-full flex flex-col justify-end items-start p-4 hover:scale-90 duration-500 transition-transform ">
        <p className="text-transform: uppercase pb-1">Popular</p>
        <h3 className="text-3xl font-bold">
          {title}{" "}
          <span className="italic font-bodoni font-medium">{subtitle}</span>{" "}
          Sneakers
        </h3>
        <div className="py-2">
          <p className="pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            minus dolore molestias itaque necessitatibus molestiae laboriosam.
          </p>
          <button className="px-6 py-4 border rounded-full border-white hover:bg-white hover:text-black">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
