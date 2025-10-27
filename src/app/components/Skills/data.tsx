import ReactIcon from "@/assets/react.svg";
import AppleIcon from "@/assets/apple.svg";
import NodeIcon from "@/assets/node.svg";
import AndroidIcon from "@/assets/android.svg";
import PythonIcon from "@/assets/python.svg";
import ReduxIcon from "@/assets/redux.svg";
import Tailwind from "@/assets/tailwind.svg";
import ExpoIcon from "@/assets/expo.svg";
import GithubIcon from "@/assets/github.svg";
import NxIcon from "@/assets/nx.svg";
import NextIcon from "@/assets/next.svg";

export const skillData = [
  {
    icons: [ReactIcon, NextIcon, ReduxIcon, Tailwind],
    title: "Senior Frontend Developer",
    subtitle: "React, NextJS",
    content: (
      <p className="text-content">
        <strong>Mastering</strong> React since 2016. <strong>Expert</strong> in
        all things React and popular tools that come with it.
      </p>
    ),
  },
  {
    icons: [AppleIcon, AndroidIcon, ExpoIcon],
    title: "Cross-Platform Mobile",
    subtitle: "React Native",
    content: (
      <p className="text-content">
        <strong>Advanced</strong> skills in developing hybrid mobile apps and
        cross-platform solutions, Including C++ skills on the RN bridge.
      </p>
    ),
  },
  {
    icons: [NodeIcon, PythonIcon],
    title: "Full Stack Architecture",
    subtitle: "Node, Python, Mongo, Postgres, Dynamo",
    content: (
      <p className="text-content">
        Built and maintained multiple backend in various languages and several
        databases / data stores.
      </p>
    ),
  },
  {
    icons: [GithubIcon, NxIcon],
    title: "Developer Enablement & Leadership",
    subtitle: "Monorepos, Github",
    content: (
      <p className="text-content">
        Built and maintained multiple backend in various languages and several
        databases / data stores.
      </p>
    ),
  },
];
