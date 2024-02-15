"use client";

import { PropsWithChildren } from "react";
import defaultTransition from "@/animation/transition";
import fadeInMotion from "@/animation/fadeInMotion";
import { motion } from "framer-motion";

const FadeInAnimation = ({ children }: PropsWithChildren) => {
  return (
    <motion.div transition={defaultTransition} variants={fadeInMotion} initial={"initial"} animate={"active"}>
      {children}
    </motion.div>
  );
};
export default FadeInAnimation;
