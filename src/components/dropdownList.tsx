"use client";

import DropdownItem from "./dropdownItem";
import defaultTransition from "@/animation/transition";
import { dropdownMotion } from "@/animation/dropdownMotion";
import { m } from "framer-motion";
import { useDropdownContext } from "@/providers/dropdownContext";

const DropdownList = () => {
  const dropdownItems = [
    {
      flag: "/australia-flag.png",
      text: "EN",
    },
  ];

  const { isOpen } = useDropdownContext();
  return (
    <m.ul
      className="dropdown-list absolute right-0 -bottom-2 bg-WHITE35 rounded-lg h-0"
      variants={dropdownMotion}
      transition={defaultTransition}
      initial="initial"
      animate={isOpen ? "active" : "initial"}
    >
      {dropdownItems.map((item, index) => (
        <DropdownItem key={index} flag={item.flag} text={item.text} />
      ))}
    </m.ul>
  );
};
export default DropdownList;
