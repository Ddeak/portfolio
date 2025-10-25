"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Socials from "./Socials";

const textVariants: Variants = {
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

const heroItems = [
  <h1 className="font-serif text-6xl z-10 text-primary">Daniel Deak</h1>,
  <h3>Senior Frontend Developer</h3>,
  <h3>Developing apps for over 10 years.</h3>,
  <Socials />
];

const Hero = () => (
    <div className="p-3 flex w-full items-center justify-center flex-col">
      <AnimatePresence>
        {heroItems.map((item, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              variants={textVariants}
              custom={index}
            >
              {item}
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );

export default Hero;
