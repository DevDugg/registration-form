"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";

interface DropdownContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<DropdownContextProps["isOpen"]>>;
}

const DropdownContent = createContext<DropdownContextProps>({} as DropdownContextProps);

const DropdownContentProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen]);
  return <DropdownContent.Provider value={value}>{children}</DropdownContent.Provider>;
};

export { DropdownContent, DropdownContentProvider };
