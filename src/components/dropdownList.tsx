"use client";

import DropdownItem from "./dropdownItem";
import defaultTransition from "@/animation/transition";
import { dropdownMotion } from "@/animation/dropdownMotion";
import { motion } from "framer-motion";
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
    <motion.ul
      className="dropdown-list absolute right-0 top-[120%] w-full bg-WHITE35 rounded-lg overflow-hidden"
      transition={defaultTransition}
      variants={dropdownMotion}
      initial="initial"
      animate={isOpen ? "active" : "initial"}
    >
      {dropdownItems.map((item, index) => (
        <DropdownItem key={index} flag={item.flag} text={item.text} />
      ))}
    </motion.ul>
  );
};
export default DropdownList;
