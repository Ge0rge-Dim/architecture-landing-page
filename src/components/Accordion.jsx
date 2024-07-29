import dropDownArrow from "../assets/icons/arrow-drop-down.svg";
import arrowClose from "../assets/icons/arrow-close.svg";
import { useState, useRef, useEffect } from "react";

const Accordion = ({ number, title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (accordionOpen) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [accordionOpen]);

  return (
    <div className="py-5">
      <button
        className="flex justify-between w-full items-center"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span className="text-2xl max-md:text-xl font-karla text-secondary-dark-500 font-thin">
          {number}
        </span>
        <span className="text-2xl max-md:text-xl font-karla text-secondary-dark-500 font-medium tracking-wide">
          {title}
        </span>
        {accordionOpen ? (
          <img src={arrowClose} alt="Close arrow" className="w-5 max-md:w-4" />
        ) : (
          <img
            src={dropDownArrow}
            alt="Dropdown arrow"
            className="w-5 max-md:w-4"
          />
        )}
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: contentHeight }}
      >
        <p
          className={`text-lg font-karla opacity-0 transition-opacity duration-1000 ease-in-out flex justify-center items-center pt-4 text-center ${
            accordionOpen ? "opacity-100" : ""
          }`}
        >
          {answer}
        </p>
        <div
          className={`line mt-4 bg-secondary-dark-500 ${
            accordionOpen ? "line-active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;
