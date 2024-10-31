import { getAllProjects } from "../data/data";
const initialState = {
  projectData: [getAllProjects],
};

const projectRedecer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_PROJECT":
      return {
        projectData: [...state.projectData, action.payload],
      };
      break;

    case "CHANGE_IN_PROJECT":
      return {
        ...state,
        projectData: state.projectData.map((project) => {
          if (project.id === action.payload.id) return action.payload;
          return project;
        }),
      };
      break;

    case "DELETE_FROM_PROJECT":
      {
        return {
          ...state,
          projectData: state.projectData.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }
      break;

    default:
      return state;
  }
};

export { initialState, projectRedecer };
