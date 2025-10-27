"use client";

import { motion, AnimatePresence } from "framer-motion";
import Socials from "./Socials";
import { tweenVariant } from "@/app/common/motion";

const heroItems = [
  <h1 className="font-serif text-6xl z-10 text-primary">Daniel Deak</h1>,
  <h3>Senior Frontend Developer</h3>,
  <h3>Developing UIs and applications for over 10 years.</h3>,
  <Socials />,
];

const Hero = () => (
  <section
    id="hero"
    className="p-3 flex w-full items-center justify-center flex-col h-screen"
  >
    <AnimatePresence>
      {heroItems.map((item, index) => {
        return (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            variants={tweenVariant}
            custom={index}
          >
            {item}
          </motion.div>
        );
      })}
    </AnimatePresence>
  </section>
);

export default Hero;
