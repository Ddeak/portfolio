"use client";

import useStories from "@/app/common/storyblok/useStories";
import { Parallax } from "react-scroll-parallax";
import { AnimatePresence, motion } from "framer-motion";
import { tweenVariant } from "@/app/common/motion/motion";
import useExcerpt from "@/app/common/storyblok/useExcerpt";
import Image from "next/image";
import { Project } from "@/app/types/storyblok";

import Section from "../Section/Section";
import { toURL } from "@/utils/toUrl";

const ProjectList = () => {
  const { data } = useStories<Project>("projects/");

  // TODO Add loding and error state handling
  if (data.length === 0) return null;

  return (
    <Parallax speed={10}>
      <AnimatePresence>
        <Section id="projects">
          <div className="flex flex-col max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-300 mb-4">Projects</h2>

            <div className="flex flex-col">
              {data.map((project, index) => {
                const excerpt = useExcerpt(project.content);
                const file = project.image.filename || null;

                return (
                  <motion.a
                    key={project.title}
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={tweenVariant}
                    custom={index}
                    className="flex flex-col items-center cursor-pointer"
                    href={`/projects/${toURL(project.title)}`}
                  >
                    <div className="flex flex-row">
                      <div className="w-[50px] h-[50px] mt-1">
                      <Image
                        src={project.image.filename ?? null}
                        className="rounded-lg h-full w-full"
                        width="150"
                        height="100"
                        alt=""
                      />
                      </div>
                      <div className="px-6 pb-6 w-[90%]">
                      <h3 className="text-xl !my-0 text-emerald-400">{project.title}</h3>
                      <p className="text-secondary">{excerpt}</p>
                      </div>
                      </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </Section>
      </AnimatePresence>
    </Parallax>
  );
};

export default ProjectList;
