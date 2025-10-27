import { Variants } from "framer-motion";

export const tweenVariant: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      bounce: 0.4,
      duration: 0.5,
      delay: index * 0.3,
    },
  }),
};