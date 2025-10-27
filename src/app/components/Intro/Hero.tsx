"use client";

import { motion, AnimatePresence } from "framer-motion";
import Socials from "./Socials";
import { tweenVariant } from "@/app/common/motion";
import Card from "../Card/Card";
import Section from "../Section/Section";

const heroItems = [
  <h3>Senior Frontend Developer</h3>,
  <h3>Developing UIs and applications for over 10 years.</h3>,
  <Socials />,
];

const Hero = () => (
  <Section id="hero">
    <Card>
      <AnimatePresence>
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          variants={tweenVariant}
          className="font-serif text-6xl z-10 text-primary mb-3"
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
            >
              {item}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </Card>
  </Section>
);

export default Hero;
