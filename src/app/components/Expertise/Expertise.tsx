"use client";

import { Parallax } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import { tweenVariant } from "@/app/common/motion/motion";

import Section from "../Section/Section";
import Image from "next/image";
import { skillData } from "./data";

const Expertise = () => (
  <Parallax speed={10}>
    <AnimatePresence>
      <Section id="expertise">
        <h2 className="text-2xl font-bold text-slate-300">Expertise</h2>
        <div className="flex flex-col max-w-4xl">
          {skillData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial="offscreen"
              whileInView="onscreen"
              variants={tweenVariant}
              custom={index}
              className="flex flex-col"
              viewport={{once: true}}
            >
              <div className="flex flex-col sm:flex-row sm:gap-x-6">
                <h3 className="text-lg my-4 text-emerald-300">{skill.title}</h3>
                <div className="flex flex-row mb-2 gap-x-3 mb-4 sm:mb-0 sm:items-center">
                  {skill.icons.map((icon, i) => (
                    <Image
                      key={`skill-icon-${i}`}
                      className="w-[25px] h-[25px]"
                      src={icon}
                      alt=""
                    />
                  ))}
                </div>
              </div>
              {skill.content}
            </motion.div>
          ))}
        </div>
      </Section>
    </AnimatePresence>
  </Parallax>
);

export default Expertise;
