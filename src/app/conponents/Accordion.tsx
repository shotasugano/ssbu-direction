import { ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        className=" text-left text-sm  font-semibold text-red-600 hover:text-red-300"
        onClick={toggleAccordion}
      >
        {title}
      </button>
      {isOpen && <div className="p-2">{children}</div>}
    </div>
  );
};

export default Accordion;
