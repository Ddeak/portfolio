"use client";

import { Parallax } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import { tweenVariant } from "@/app/common/motion/motion";

import Section from "../Section/Section";
import useStory from "@/app/common/storyblok/useStory";
import { Page } from "@/app/types/storyblok";
import { StoryblokRichText } from "@storyblok/react";

const Experience = () => {
  const { data } = useStory<Page>("home");

  if (!data?.body?.length) return null;

  const experiences = data.body.flatMap((item) =>
    item.component === "experience" ? item : []
  );

  return (
    <Parallax speed={10}>
      <AnimatePresence>
        <Section id="experience">
          <h2 className="text-2xl font-bold text-slate-300">Experience</h2>

          <a
            href="/Daniel-Deak-resume.pdf"
            className="font-bold my-2 hover:bg-gray-600/30 px-2 py-2 rounded-lg -ml-2"
          >
            View full resume <span className="arrow font-normal pb-2">↗</span>
          </a>

          <div className="flex flex-col max-w-4xl gap-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial="offscreen"
                whileInView="onscreen"
                variants={tweenVariant}
                custom={index}
                className="flex flex-col"
                viewport={{ once: true }}
              >
                <h3 className="text-lg text-emerald-300">{exp.title}</h3>
                <p className="text-xs text-emerald-400 mb-4">
                  {exp.subtitle} | {exp.time}
                </p>
                <div className="experience">
                  <StoryblokRichText doc={exp.content} />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills?.value.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 text-sm font-medium text-emerald-300 bg-emerald-400/20 w-fit rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </AnimatePresence>
    </Parallax>
  );
};

export default Experience;
