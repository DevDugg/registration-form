"use client";

import { DropdownContextProvider, useDropdownContext } from "@/providers/dropdownContext";

import DropdownList from "./dropdownList";
import Image from "next/image";

const InnerDropdown = () => {
  const { isOpen, setIsOpen } = useDropdownContext();
  return (
    <div
      className="dropdown flex items-center gap-4 border border-WHITE px-4 py-3 rounded-lg cursor-pointer relative bg-WHITE35"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-1">
        <Image src={"/australia-flag.png"} alt="flag" width={24} height={16} className="w-6 h-4 object-contain" />
        <span className="text-base">EN</span>
      </div>
      <Image src={"/arrow-down.svg"} alt="arrow" width={20} height={20} className="w-5 h-5 object-contain" />
      <DropdownList />
    </div>
  );
};

const Dropdown = () => {
  return (
    <DropdownContextProvider>
      <InnerDropdown />
    </DropdownContextProvider>
  );
};
export default Dropdown;
