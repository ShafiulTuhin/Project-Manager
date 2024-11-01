import React, { useContext } from "react";
import { toast } from "react-toastify";

import { ProjectContext } from "./context";
import DeleteSvg from "./svg-files/DeleteSvg";
import EditSvg from "./svg-files/EditSvg";

const Project = ({ project, onEdit }) => {
  const { dispatch } = useContext(ProjectContext);

  const handleDeleteProject = (event, projectId) => {
    event.preventDefault();
    dispatch({
      type: "DELETE_FROM_PROJECT",
      payload: projectId,
    });

    alert(`Deleted ${projectId.title} Successfully`);
  };
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
          {project?.title}
        </h4>
        <div className="flex gap-2">
          <DeleteSvg onDelete={() => handleDeleteProject(event, project)} />
          <EditSvg onEdit={() => onEdit(project)} />
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{project?.description}</p>

      <p className="mt-6 text-xs text-zinc-400">{project?.date}</p>
    </div>
  );
};

export default Project;
