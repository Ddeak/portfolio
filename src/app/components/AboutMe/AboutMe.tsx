"use client";

import { Parallax } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import { tweenVariant } from "@/app/common/motion";

const AboutMeText = [
  "I've been developing UIs, websites and applications for over a decade. I love solving problems and making other's day better by creating tools that make their day easier.",
  "I have worked remotely since 2016. ",
];

const AboutMe = () => (
  <section
    id="about-me"
    className="p-3 flex w-full items-center justify-center flex-col h-screen"
  >
    <div className="max-w-[600px]">
    <Parallax speed={10}>
      <AnimatePresence>
        <motion.h2
          initial="offscreen"
          whileInView="onscreen"
          variants={tweenVariant}
          custom={1}
          className="text-4xl"
        >
          About Me
        </motion.h2>
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
      </AnimatePresence>
    </Parallax>
    </div>
  </section>
);

export default AboutMe;
