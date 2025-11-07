import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Intro/Hero";
import Expertise from "./components/Expertise/Expertise";
import ProjectList from "./components/Projects/ProjectList";

const Page = async () => {
  return (
    <>
      <Hero />
      <Expertise />
      <ProjectList />
      <AboutMe />
    </>
  );
};

export default Page;
