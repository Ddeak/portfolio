"use client";

import useStories from "@/app/common/storyblok/useStories";
import { Parallax } from "react-scroll-parallax";
import { AnimatePresence, motion } from "framer-motion";
import { tweenVariant } from "@/app/common/motion/motion";
import useExcerpt from "@/app/common/storyblok/useExcerpt";
import Image from "next/image";
import { Project } from "@/app/types/storyblok";

import Section from "../Section/Section";
import Card from "../Card/Card";

const ProjectList = () => {
  const { data } = useStories<Project>("projects/");

  // TODO Add loding and error state handling
  if (data.length === 0) return null;

  return (
    <Parallax speed={10}>
      <AnimatePresence>
        <Section id="portfolio">
          <Card fullWidth>
            <h2 className="text-4xl text-green-400">Portfolio</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-8">
              {data.map((project, index) => {
                const excerpt = useExcerpt(project.content);

                return (
                  <motion.div
                    key={project.title}
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={tweenVariant}
                    custom={index}
                    className="flex flex-col items-center max-w-xs cursor-pointer"
                  >
                    <Card
                      noPadding
                      fullBorder
                      link={`/projects/${project.title}`}
                    >
                      <Image
                        src={project.image.filename ?? null}
                        className="rounded-lg"
                        width="320"
                        height="100"
                        alt=""
                      />
                      <h3 className="text-xl !my-0">{project.title}</h3>
                      <p className="px-6 pb-6 text-content">{excerpt}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </Section>
      </AnimatePresence>
    </Parallax>
  );
};

export default ProjectList;
