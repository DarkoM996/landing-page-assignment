import React, { useState } from "react";
import image from "../images/image.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const Testimonial_data = [
    {
      img: image,
      content_text:
        "This is unbelivable for many reasons. This is a text that is meant to be a replacement for Lorem Ipsum text that for some reason throws an error here when fully copied. Nonetheless, here is me manually typing it in here so I can have some sort of text replacement for that instead.",
      testimonial_name: "Jennifer Johnson",
      text_block: "Project Manager@Microsoft",
    },
    {
      img: image2,
      content_text:
        "This is unbelivable for many reasons. This is a text that is meant to be a replacement for Lorem Ipsum text that for some reason throws an error here when fully copied. Nonetheless, here is me manually typing it in here so I can have some sort of text replacement for that instead.",
      testimonial_name: "Jennifer Johnson",
      text_block: "Project Manager@Microsoft",
    },
    {
      img: image3,
      content_text:
        "This is unbelivable for many reasons. This is a changed text that's supposed to be the 3rd value here. And this is the third quote in this setup. Nonetheless, here is me adding more staff in here so it can fit this. And to keep matter rightfully in so, here is also more words to add to this paragraph so its even more responsive than before.",
      testimonial_name: "Jennifer Johnson",
      text_block: "Project Manager@Microsoft",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = Testimonial_data.length;

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="max-w-screen-3xl mx-auto relative px-6 py-4">
      {Testimonial_data.map(
        (item, index) =>
          index === current && (
            <div key={index}>
              <h2 className="text-4xl font-bold text-center py-12">
                Verified{" "}
                <span className="italic font-bodoni font-medium">
                  Testimonials
                </span>{" "}
              </h2>
              {/* Text With Quote */}
              <div className="flex flex-col justify-center items-start w-full h-full mx-auto px-6 py-4 md:px-16 lg:px-24">
                <h4 className="text-3xl pb-8">{item.content_text}</h4>
                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                  <div className="flex flex-row justify-start items-center gap-4">
                    <div className="flex flex-row justify-center items-center gap-4">
                      <img
                        src={item.img}
                        alt="/"
                        className="w-[120px] h-[120px] rounded-full object-cover bg-center"
                      />
                      <div className="">
                        <p>{item.testimonial_name}</p>
                        <p>{item.text_block}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <button className="p-4 bg-stone-500 rounded-full">
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={previous}
                      className="p-4 bg-stone-500 rounded-full"
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Testimonials;

// Static code of the testimonial

// return (
//     <div className="max-w-screen-3xl mx-auto relative px-6 py-4">
//       <h2 className="text-4xl text-center py-12">
//         Verified{" "}
//         <span className="italic font-bodoni font-medium">Testimonials</span>{" "}
//       </h2>
//       {/* Text With Quote */}
//       <div className="flex flex-col justify-center items-start w-full h-full mx-auto px-6 py-4 md:px-16 lg:px-24">
//         <h4 className="text-4xl pb-8">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aliquid
//           error esse, consectetur accusantium maiores, nemo corrupti ipsum
//           explicabo provident ex quia! Itaque velit, fuga asperiores quas quo
//           quia nesciunt!
//         </h4>
//         <div className="flex flex-col md:flex-row justify-between items-center w-full">
//           <div className="flex flex-row justify-start items-center gap-4">
//             <div className="flex flex-row justify-center items-center gap-4">
//               <img
//                 src={image}
//                 alt="/"
//                 className="w-[120px] h-[120px] rounded-full"
//               />
//               <div className="">
//                 <p>Founder Name</p>
//                 <p>Company Role, Company Name</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-row gap-4">
//             <button className="p-4 bg-stone-500 rounded-full">
//               Click Left
//             </button>
//             <button className="p-4 bg-stone-500 rounded-full">
//               Click Right
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
