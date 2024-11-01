import React, { useContext, useState } from "react";
import { ProjectContext } from "./context";
import AddSvg from "./svg-files/AddSvg";
import SortSvg from "./svg-files/SortSvg";
import Project from "./Project";

const ProjectList = ({ openModal, onEdit, searchItem }) => {
  const { state } = useContext(ProjectContext);

  // Filtering all Category from Array
  const filterProject = state.projectData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchItem?.toLowerCase()) ||
      project.description.toLowerCase().includes(searchItem?.toLowerCase())
  );
  //Sorting Date and searching 'title' for To-Do:
  const [toDoAscending, setToDoAscending] = useState(true);
  const typeToDo = filterProject
    .filter((type) => type.category === "todo")
    .sort(
      (a, b) =>
        toDoAscending
          ? new Date(a.date) - new Date(b.date) // Ascending order
          : new Date(b.date) - new Date(a.date) // Descending order
    );
  const handleSortToDo = () => {
    setToDoAscending((prev) => !prev);
  };

  //Sorting Date and searching 'title' for On Progress:
  const [onProgressAscending, setonProgressAscending] = useState(true);
  const typeOnProgress = filterProject
    .filter((type) => type.category === "inprogress")
    .sort(
      (a, b) =>
        onProgressAscending
          ? new Date(a.date) - new Date(b.date) // Ascending order
          : new Date(b.date) - new Date(a.date) // Descending order
    );

  const handleSortOnProgress = () => {
    setonProgressAscending((prev) => !prev);
  };
  //Sorting Date and searching 'title' for Done:
  const [doneAscending, setDoneAscending] = useState(true);
  const typeDone = filterProject
    .filter((type) => type.category === "done")
    .sort(
      (a, b) =>
        doneAscending
          ? new Date(a.date) - new Date(b.date) // Ascending order
          : new Date(b.date) - new Date(a.date) // Descending order
    );

  const handleSortDone = () => {
    setDoneAscending((prev) => !prev);
  };

  //Sorting Date and searching 'title' for Revise:
  const [reviseAscending, setReviseAscending] = useState(true);
  const typeRevise = filterProject
    .filter((type) => type.category === "revise")
    .sort(
      (a, b) =>
        reviseAscending
          ? new Date(a.date) - new Date(b.date) // Ascending order
          : new Date(b.date) - new Date(a.date) // Descending order
    );

  const handleSortRevise = () => {
    setReviseAscending((prev) => !prev);
  };
  //Filtering search by title:

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
                  <span className="ml-2">({typeToDo.length})</span>
                </h3>
                <SortSvg onSort={handleSortToDo} />
              </div>

              {typeToDo.length === 0
                ? "List is Empty"
                : typeToDo.map((project) => (
                    <Project
                      key={project.id}
                      project={project}
                      onEdit={onEdit}
                    />
                  ))}
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-red-600 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  On Progress
                  <span className="ml-2">({typeOnProgress.length})</span>
                </h3>
                <SortSvg onSort={handleSortOnProgress} />
              </div>
              {typeOnProgress.length === 0
                ? "List is Empty"
                : typeOnProgress.map((project) => (
                    <Project
                      key={project.id}
                      project={project}
                      onEdit={onEdit}
                    />
                  ))}
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4 ">
            <div className="rounded-lg bg-yellow-600 p-4 ">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Done
                  <span className="ml-2">({typeDone.length})</span>
                </h3>

                <SortSvg onSort={handleSortDone} />
              </div>
              {typeDone.length === 0
                ? "List is Empty"
                : typeDone.map((project) => (
                    <Project
                      key={project.id}
                      project={project}
                      onEdit={onEdit}
                    />
                  ))}
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-green-600 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Revised
                  <span className="ml-2">({typeRevise.length})</span>
                </h3>
                <SortSvg onSort={handleSortRevise} />
              </div>
              {typeRevise.length === 0
                ? "List is Empty"
                : typeRevise.map((project) => (
                    <Project
                      key={project.id}
                      project={project}
                      onEdit={onEdit}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
