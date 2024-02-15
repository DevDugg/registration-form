"use client";

import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from "react";

import buttonMotion from "@/animation/buttonMotion";
import defaultTransition from "@/animation/transition";
import { motion } from "framer-motion";

interface IProps extends PropsWithChildren {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  width?: CSSProperties["width"];
}

const WhiteButton = ({ onClick, type, children, width }: IProps) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className="bg-WHITE35 rounded-lg py-3 px-4 flex justify-center"
      style={{ width }}
      variants={buttonMotion}
      transition={defaultTransition}
      initial={"initial"}
      whileHover={"hover"}
    >
      {children}
    </motion.button>
  );
};
export default WhiteButton;
