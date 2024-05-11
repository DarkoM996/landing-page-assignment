import React from "react";
import image9 from "../images/image9.jpg";

const Contact = () => {
  return (
    <div
      name="contact"
      className="max-w-screen-3xl mx-auto relative px-6 py-4 md:py-8 lg:py-16"
    >
      <div className="py-6">
        <h2 className="text-4xl text-center font-bold py-2">
          Contact <span className="italic font-bodoni font-medium">Form</span>{" "}
        </h2>
        <p className="text-center">
          Submit the form below if you have any questions regarding the orders,
          products etc at sneakerlife@contact.com
        </p>
      </div>
      <form
        action=""
        className="max-w-screen-2xl mx-auto flex flex-col justify-center items-stretch "
      >
        <input
          className="my-4 p-2 bg-stone-200"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-stone-200"
          type="email"
          placeholder="email"
          name="email"
        />
        <textarea
          className="bg-stone-200 p-2 my-2"
          name="message"
          rows="10"
          placeholder="Your message here"
        ></textarea>
        <button className="text-white bg-black border-2 hover:bg-stone-900 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Colaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

// Previous idea
