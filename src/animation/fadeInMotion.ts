import { Variants } from "framer-motion";

const fadeInMotion: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },

  active: {
    y: 0,
    opacity: 1,
  },
};

export default fadeInMotion;
