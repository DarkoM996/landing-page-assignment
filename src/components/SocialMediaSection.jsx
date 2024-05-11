import React from "react";
import SocialMediaItem from "./SocialMediaItem";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";

const SocialMediaSection = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative h-full px-6 py-4">
      <h2 className="text-4xl text-center py-12 font-bold">
        Grow <span className="italic font-bodoni font-medium">With Us</span> On
        Social Media{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SocialMediaItem img={image5} title="Instagram" />
        <SocialMediaItem img={image6} title="Facebook" />
        <SocialMediaItem img={image7} title="Pinterest" />
        <SocialMediaItem img={image8} title="Twitter" />
        <SocialMediaItem img={image9} title="Instagram" />
        <SocialMediaItem img={image10} title="Facebook" />
      </div>
    </div>
  );
};

export default SocialMediaSection;
