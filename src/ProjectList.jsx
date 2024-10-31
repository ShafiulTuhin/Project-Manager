import React, { useContext, useState } from "react";
import { ProjectContext } from "./context";
import AddSvg from "./svg-files/AddSvg";
import SortSvg from "./svg-files/SortSvg";
import DeleteSvg from "./svg-files/DeleteSvg";
import EditSvg from "./svg-files/EditSvg";

const ProjectList = ({ openModal, onEdit }) => {
  const { state, dispatch } = useContext(ProjectContext);
  const [isAscending, setIsAscending] = useState(true);
  //Deleting projects one by one
  const handleDeleteProject = (event, projectId) => {
    event.preventDefault();
    dispatch({
      type: "DELETE_FROM_PROJECT",
      payload: projectId,
    });
  };
  //Filtering all Category from Array
  const typeToDo = state.projectData.filter(
    (type) => type.category === "To-Do" || type.category === "todo"
  );
  const typeOnProgress = state.projectData.filter(
    (type) => type.category === "On Progress" || type.category === "inprogress"
  );
  const typeDone = state.projectData.filter(
    (type) => type.category === "Done" || type.category === "done"
  );
  const typeRevise = state.projectData.filter(
    (type) => type.category === "Revise" || type.category === "revise"
  );
  //Sorting by Date
  state.projectData.sort(
    (a, b) =>
      isAscending
        ? new Date(a.date) - new Date(b.date) // Ascending order
        : new Date(b.date) - new Date(a.date) // Descending order
  );

  const handleSort = () => {
    setIsAscending((prev) => !prev);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
              onClick={openModal}
            >
              <AddSvg />
              Add
            </button>
          </div>
        </div>

        <div className="-mx-2 mb-6 flex flex-wrap">
          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-indigo-600 p-4 mb-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  To Do
                  {typeToDo.length > 0 && (
                    <span className="ml-2">({typeToDo.length})</span>
                  )}
                </h3>
                <SortSvg onSort={handleSort} />
              </div>
              {typeToDo.length === 0 ? (
                <p className="text-2xl mt-4 text-white">List is Empty</p>
              ) : (
                <div>
                  {typeToDo.map((project) => (
                    <div
                      className="mb-4 rounded-lg bg-gray-800 p-4"
                      key={project.id}
                    >
                      <div className="flex justify-between">
                        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
                          {project.title}
                        </h4>
                        <div className="flex gap-2">
                          <DeleteSvg
                            onDelete={() => handleDeleteProject(event, project)}
                          />
                          <EditSvg onEdit={() => onEdit(project)} />
                        </div>
                      </div>
                      <p className="mb-2 text-sm text-zinc-200">
                        {project.description}
                      </p>

                      <p className="mt-6 text-xs text-zinc-400">
                        {project.date}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-red-600 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  On Progress
                  {typeOnProgress.length > 0 && (
                    <span className="ml-2">({typeOnProgress.length})</span>
                  )}
                </h3>
                <SortSvg onSort={handleSort} />
              </div>

              {typeOnProgress.length === 0 ? (
                <p className="text-2xl mt-4 text-white">List is Empty</p>
              ) : (
                <div>
                  {typeOnProgress.map((project) => (
                    <div
                      className="mb-4 rounded-lg bg-gray-800 p-4"
                      key={project.id}
                    >
                      <div className="flex justify-between">
                        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
                          {project.title}
                        </h4>

                        <div className="flex gap-2">
                          <DeleteSvg
                            onDelete={() => handleDeleteProject(event, project)}
                          />

                          <EditSvg onEdit={() => onEdit(project)} />
                        </div>
                      </div>
                      <p className="mb-2 text-sm text-zinc-200">
                        {project.description}
                      </p>

                      <p className="mt-6 text-xs text-zinc-400">
                        {project.date}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4 ">
            <div className="rounded-lg bg-yellow-600 p-4 ">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Done
                  {typeDone.length > 0 && (
                    <span className="ml-2">({typeDone.length})</span>
                  )}
                </h3>

                <SortSvg onSort={handleSort} />
              </div>
              {typeDone.length === 0 ? (
                <p className="text-2xl mt-4 text-white">List is Empty</p>
              ) : (
                <div>
                  {typeDone.map((project) => (
                    <div
                      className="mb-4 rounded-lg bg-gray-800 p-4"
                      key={project.id}
                    >
                      <div className="flex justify-between">
                        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
                          {project.title}
                        </h4>

                        <div className="flex gap-2">
                          <DeleteSvg
                            onDelete={() => handleDeleteProject(event, project)}
                          />
                          <EditSvg onEdit={() => onEdit(project)} />
                        </div>
                      </div>
                      <p className="mb-2 text-sm text-zinc-200">
                        {project.description}
                      </p>

                      <p className="mt-6 text-xs text-zinc-400">
                        {project.date}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-green-600 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Revised
                  {typeRevise.length > 0 && (
                    <span className="ml-2">({typeRevise.length})</span>
                  )}
                </h3>
                <SortSvg onSort={handleSort} />
              </div>
              {typeRevise.length === 0 ? (
                <p className="text-2xl mt-4 text-white">List is Empty</p>
              ) : (
                <div>
                  {typeRevise.map((project) => (
                    <div
                      className="mb-4 rounded-lg bg-gray-800 p-4"
                      key={project.id}
                    >
                      <div className="flex justify-between">
                        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
                          {project.title}
                        </h4>

                        <div className="flex gap-2">
                          <DeleteSvg
                            onDelete={() => handleDeleteProject(event, project)}
                          />
                          <EditSvg onEdit={() => onEdit(project)} />
                        </div>
                      </div>
                      <p className="mb-2 text-sm text-zinc-200">
                        {project.description}
                      </p>

                      <p className="mt-6 text-xs text-zinc-400">
                        {project.date}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
