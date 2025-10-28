import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Intro/Hero";
import Expertise from "./components/Expertise/Expertise";
import ProjectList from "./components/Projects/ProjectList";

const Page = async () => {

  return (
    <>
      <div className="header-wrapper">
        <Hero />
        <Expertise />
        <AboutMe />
        <ProjectList />
      </div>
    </>
  );
};

export default Page;
