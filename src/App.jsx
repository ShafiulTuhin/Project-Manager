import { useReducer } from "react";
import ProjectBoard from "./ProjectBoard";
import { ProjectContext } from "./context";
import { initialState, projectRedecer } from "./reducers/ProjectReducer";
import { getAllProjects } from "./data/data";

function App() {
  const [state, dispatch] = useReducer(projectRedecer, initialState);

  return (
    <>
      <ProjectContext.Provider value={{ state, dispatch }}>
        <ProjectBoard />
      </ProjectContext.Provider>
    </>
  );
}

export default App;
