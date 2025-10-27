"use client";

import { Parallax } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import { tweenVariant } from "@/app/common/motion/motion";
import Section from "../Section/Section";
import Card from "../Card/Card";

const AboutMeText = [
  "I've been developing UIs, websites and applications for over a decade. I love solving problems and making other's day better by creating tools that make their day easier.",
  "I have worked remotely since 2016. ",
];

const AboutMe = () => (
  <Parallax speed={10}>
    <AnimatePresence>
      <Section id="about-me">
        <Card>
          <h2 className="text-4xl text-green-400">About Me</h2>
          {AboutMeText.map((text, i) => (
            <motion.p
              key={`about-me-${i}`}
              initial="offscreen"
              whileInView="onscreen"
              variants={tweenVariant}
              custom={i + 1}
            >
              {text}
            </motion.p>
          ))}
        </Card>
      </Section>
    </AnimatePresence>
  </Parallax>
);

export default AboutMe;
