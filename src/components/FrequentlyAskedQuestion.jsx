import React from "react";
import Accordion from "./Accordion";

const FrequentlyAskedQuestion = () => {
  return (
    <div className="p-2">
      <Accordion
        title="What is SneakerLife known for?"
        answer="SneakerLife is known for its exquisite and meticulously crafted collection of the world's best sneakers available on the market"
      />
      <Accordion
        title="How do I place an order?"
        answer="Pretty simple. Fill out the contact form and someone will be in touch with you regarding your order."
      />
      <Accordion
        title="How long do I wait for my purchase?"
        answer="It depends on your specific purchase. We do have many purchases from the world's best sneaker brands. If your order is specific, it will go beyond the 24-48 hour mark."
      />
      <Accordion
        title="Do you include shipping?"
        answer="Yes, we do. Shipping is a standard practice for our purchases."
      />
    </div>
  );
};

export default FrequentlyAskedQuestion;
