import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homecards from "./components/Homecards";
import ProjectList from "./components/ProjectList";
import ViewAllProjects from "./components/ViewAllProjects";

const App = () => {
  return (
    <div>
      <>
        <Navbar />
        <Hero title="Daphnée Jeune" subtitle="Software Engineer" />
        <Homecards />
        <ProjectList />
        <ViewAllProjects />
      </>
    </div>
  );
};

export default App;
