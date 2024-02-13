"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useMemo, useState } from "react";

interface DropdownContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<DropdownContextProps["isOpen"]>>;
}

const DropdownContent = createContext<DropdownContextProps>({} as DropdownContextProps);

const DropdownContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen]);
  return <DropdownContent.Provider value={value}>{children}</DropdownContent.Provider>;
};

const useDropdownContext = () => {
  const context = DropdownContent;
  if (!context) {
    throw new Error("useDropdownContent must be used within a DropdownContentProvider");
  }
  return useContext(context);
};

export { DropdownContent, DropdownContextProvider, useDropdownContext };
