"use client";

import Image from "next/image";
import buttonMotion from "@/animation/buttonMotion";
import defaultTransition from "@/animation/transition";
import { motion } from "framer-motion";
import { useDropdownContext } from "@/providers/dropdownContext";

interface IProps {
  flag: string;
  text: string;
}

const DropdownItem = ({ flag, text }: IProps) => {
  const { setIsOpen } = useDropdownContext();
  return (
    <motion.li
      className="flex items-center gap-1 w-full px-4 py-3 border-y-[0.5] border-WHITE"
      onClick={() => setIsOpen(false)}
      variants={buttonMotion}
      transition={defaultTransition}
      initial="initial"
      whileHover="hover"
    >
      <Image src={flag} alt="flag" width={20} height={20} className="w-5 h-5 object-contain" />
      <span className="text-base">{text}</span>
    </motion.li>
  );
};

export default DropdownItem;
