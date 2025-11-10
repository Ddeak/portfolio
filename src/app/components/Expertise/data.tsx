import ReactIcon from "@/assets/icons/react.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import NodeIcon from "@/assets/icons/node.svg";
import AndroidIcon from "@/assets/icons/android.svg";
import PythonIcon from "@/assets/icons/python.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import ExpoIcon from "@/assets/icons/expo.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NxIcon from "@/assets/icons/nx.svg";
import NextIcon from "@/assets/icons/next.svg";

export const skillData = [
  {
    icons: [ReactIcon, NextIcon, ReduxIcon, Tailwind],
    title: "Senior Frontend Developer",
    subtitle: "React, NextJS",
    content: (
      <p className="text-secondary">
        <strong className="text-slate-300">Mastering</strong> React since 2016. <strong className="text-slate-300">Expert</strong> in
        all things React and popular tools that come with it.
      </p>
    ),
  },
  {
    icons: [AppleIcon, AndroidIcon, ExpoIcon],
    title: "Cross-Platform Mobile",
    subtitle: "React Native",
    content: (
      <p className="text-secondary">
        <strong className="text-slate-300">Advanced</strong> skills in developing hybrid mobile apps and
        cross-platform solutions, including C++ skills on the RN bridge.
      </p>
    ),
  },
  {
    icons: [NodeIcon, PythonIcon],
    title: "Full Stack Architecture",
    subtitle: "Node, Python, Mongo, Postgres, Dynamo",
    content: (
      <p className="text-secondary">
        Built and maintained multiple backend in various languages and several
        databases / data stores.
      </p>
    ),
  },
  {
    icons: [GithubIcon, NxIcon],
    title: "Developer Enablement",
    subtitle: "Monorepos, GitHub/Lab, CI/CD",
    content: (
      <p className="text-secondary">
        Setup and maintained various CI pipelines with Jenkins, Terraform and Github actions. 
        Experienced with multiple version control systems.
      </p>
    ),
  },
];
