"use client";

import { Parallax } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import { tweenVariant } from "@/app/common/motion";

import Section from "../Section/Section";
import Card from "../Card/Card";
import Image from "next/image";
import { skillData } from "./data";

const Skills = () => (
  <AnimatePresence>
    <Section id="skills" align="end">
      <Parallax speed={10}>
        <Card>
          <h2 className="text-4xl text-green-400">Skills</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillData.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial="offscreen"
                whileInView="onscreen"
                variants={tweenVariant}
                custom={index}
                className="flex flex-col items-center max-w-xs"
              >
                <div className="w-full flex flex-row justify-center mb-2 gap-x-2">
                  {skill.icons.map((icon, i) => (
                    <Image
                      key={`skill-icon-${i}`}
                      className="w-[30px] h-[30px]"
                      src={icon}
                      alt=""
                    />
                  ))}
                </div>
                <h3 className="text-xl">{skill.title}</h3>
                <div className="my-3 mb-3 h-[1px] border-t-0 bg-green-400 w-50"></div>
                {skill.content}
              </motion.div>
            ))}
          </div>
        </Card>
      </Parallax>
    </Section>
  </AnimatePresence>
);

export default Skills;
