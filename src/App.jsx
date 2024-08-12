import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <>
        <Navbar />
        <Hero title="Daphnée Jeune" subtitle="Software Engineer" />
      </>
    </div>
  );
};

export default App;
