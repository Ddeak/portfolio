import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Intro/Hero";
import Expertise from "./components/Expertise/Expertise";
import ProjectList from "./components/Projects/ProjectList";
import Experience from "./components/Experience/Experience";

const Page = async () => (
  <>
    <Hero />
    <Expertise />
    <Experience />
    <ProjectList />
    <AboutMe />
  </>
);

export default Page;
