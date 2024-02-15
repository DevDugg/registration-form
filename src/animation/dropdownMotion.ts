import { Variants } from "framer-motion";
import colors from "@/colors";

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

const dropdownItemMotion: Variants = {
  initial: {
    background: colors.WHITE35,
  },

  hover: {
    background: colors.BLACK35,
  },
};

export { dropdownMotion, dropdownItemMotion };
