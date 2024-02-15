import { Variants } from "framer-motion";

const dropdownMotion: Variants = {
  initial: {
    rotateY: "-20deg",
    pointerEvents: "none",
    opacity: 0,
  },

  active: {
    rotateY: "0deg",
    pointerEvents: "all",
    opacity: 1,
  },
};

export { dropdownMotion };
