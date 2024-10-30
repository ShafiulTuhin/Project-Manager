import { useState } from "react";
import ProjectBoard from "./ProjectBoard";
import { ProjectContext } from "./context";
import { getAllProjects } from "./data/data";

function App() {
  const [projectData, setProjectData] = useState(getAllProjects);
  return (
    <>
      <ProjectContext.Provider value={{ projectData, setProjectData }}>
        <ProjectBoard />
      </ProjectContext.Provider>
    </>
  );
}

export default App;
