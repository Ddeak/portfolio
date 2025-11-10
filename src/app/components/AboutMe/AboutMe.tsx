"use client";

import { Parallax } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import { tweenVariant } from "@/app/common/motion/motion";
import Section from "../Section/Section";

const AboutMeText = [
  "Hey there! I'm Daniel. I am driven by a deep love for solving problems of all kinds - it is the reason I chose to became a software developer.",
  "I'm a Senior Frontend Developer with over a decade of experience building high-performance, user-centric applications using React, TypeScript, and the modern JavaScript ecosystem. I’ve led transformative projects at scale, including architecting a modular, customizable sign-up flow for PayPal and enhancing People’s Postcode Lottery’s high-traffic platform serving 500k+ weekly users. From migrating legacy Java/Python systems to Gatsby/React to strengthening website security and integrating complex APIs, I deliver robust, scalable solutions with a focus on performance and user experience.",
  "I excel in improving development workflows—championing testing with Cypress and React-Testing-Library, streamlining CI/CD pipelines on AWS, and mentoring teams through agile transitions from SCRUM to Kanban. Whether setting up feature flags, automating deployments, or taking on full-stack responsibilities in Scala and Node, I’m driven to innovate, optimize processes, and empower teams.",
];

const AboutMe = () => (
  <Parallax speed={10}>
    <AnimatePresence>
      <Section id="about-me">
        <h2 className="text-2xl font-bold text-slate-300 mb-4">About Me</h2>
        <div className="flex flex-col max-w-4xl gap-y-4">
          {AboutMeText.map((text, i) => (
            <motion.p
              key={`about-me-${i}`}
              initial="offscreen"
              whileInView="onscreen"
              variants={tweenVariant}
              custom={i + 1}
              className="text-secondary"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </Section>
    </AnimatePresence>
  </Parallax>
);

export default AboutMe;
