import React from "react";
import Hero from "../components/Hero";
import Homecards from "../components/Homecards";
import ProjectList from "../components/ProjectList";
import ViewAllProjects from "../components/ViewAllProjects";

const Homepage = () => {
  return (
    <>
      <Hero title="Daphnée Jeune" subtitle="Software engineer" />
      <Homecards />
      <ProjectList />
      <ViewAllProjects />
    </>
  );
};

export default Homepage;
