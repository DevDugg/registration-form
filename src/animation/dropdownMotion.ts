import { Variants } from "framer-motion";
import colors from "@/colors";

const dropdownMotion: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },

  active: {
    height: "auto",
    opacity: 1,
  },
};

const dropdownItemMotion: Variants = {
  initial: {
    background: colors.WHITE35,
  },

  hover: {
    background: colors.WHITE,
  },
};

export { dropdownMotion, dropdownItemMotion };
