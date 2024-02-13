"use client";

import Image from "next/image";
import defaultTransition from "@/animation/transition";
import { dropdownItemMotion } from "@/animation/dropdownMotion";
import { m } from "framer-motion";
import { useDropdownContext } from "@/providers/dropdownContext";

interface IProps {
  flag: string;
  text: string;
}

const DropdownItem = ({ flag, text }: IProps) => {
  const { setIsOpen } = useDropdownContext();
  return (
    <m.li
      className="flex items-center gap-1 w-full px-3 py-2 border-y-[0.5] border-WHITE"
      onClick={() => setIsOpen(false)}
      variants={dropdownItemMotion}
      transition={defaultTransition}
      initial="initial"
      whileHover="hover"
    >
      <Image src={flag} alt="flag" width={20} height={20} className="w-5 h-5 object-contain" />
      <span className="text-base">{text}</span>
    </m.li>
  );
};

export default DropdownItem;
