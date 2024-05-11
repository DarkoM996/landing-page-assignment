import React from "react";

const SocialMediaItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full  group bg-black  rounded-xl">
      <img
        src={img}
        alt="/"
        // Height was given specific value so it could the specific requirement
        className=" group-hover:opacity-30 h-[420px] w-full object-cover object-center rounded-xl"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="font-serif  text-3xl text-white">{title}</h3>
      </div>
    </div>
  );
};

export default SocialMediaItem;
