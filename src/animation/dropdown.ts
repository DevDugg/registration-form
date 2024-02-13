import { Variants } from "framer-motion";

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

export default dropdownMotion;
