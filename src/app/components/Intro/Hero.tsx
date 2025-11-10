"use client";

import { motion, AnimatePresence } from "framer-motion";
import Socials from "./Socials";
import { tweenVariant } from "@/app/common/motion/motion";
import Section from "../Section/Section";

const heroItems = [
  <p className="text-lg font-bold mb-4">Senior Frontend Developer</p>,
  <p className="text-secondary mb-4">Developing UIs and applications for over 10 years. I love solving problems.</p>,
  <Socials />,
];

const Hero = () => (
  <Section id="hero">
    <div className="flex flex-col max-w-4xl w-full mb-12">
      <AnimatePresence>
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          variants={tweenVariant}
          className="text-5xl font-bold mb-1"
          viewport={{once: true}}
        >
          Daniel Deak
        </motion.h1>
        {heroItems.map((item, index) => {
          return (
            <motion.div
              key={`hero-${index + 1}`}
              initial="offscreen"
              whileInView="onscreen"
              variants={tweenVariant}
              custom={index + 1}
              viewport={{once: true}}
            >
              {item}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  </Section>
);

export default Hero;
