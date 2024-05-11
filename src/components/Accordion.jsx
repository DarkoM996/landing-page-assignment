import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-2 border-b border-[#CFC6B6] ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full"
      >
        <span className="text-3xl p-2">{title}</span>
        {accordionOpen ? (
          <span className="transition-all duration-300 ease-in-out flex justify-between items-center rotate-180">
            <MdRemove className="text-2xl" />
          </span>
        ) : (
          <span className="transition-all duration-300 ease-in-out">
            <MdOutlineAdd className="text-2xl" />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#454139] text-base ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 hidden:p-2"
        }`}
      >
        <div className="overflow-hidden p-2">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
