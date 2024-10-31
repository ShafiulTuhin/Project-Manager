import React, { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProjectList from "./ProjectList";
import AddProjectModal from "./AddProjectModal";
import { ProjectContext } from "./context";

const ProjectBoard = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const [projectToUpdate, setProjectToUpdate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddEditProject = (newProject, isAdd) => {
    if (isAdd) {
      dispatch({
        type: "ADD_TO_PROJECT",
        payload: {
          ...newProject,
          id: crypto.randomUUID(),
        },
      });
    } else {
      dispatch({
        type: "CHANGE_IN_PROJECT",
        payload: { ...newProject },
      });
    }
    setShowModal(false);
  };
  const handleEditProject = (project) => {
    setProjectToUpdate(project);
    setShowModal(true);
  };

  const handleAddModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <AddProjectModal
          onSave={handleAddEditProject}
          projectToUpdate={projectToUpdate}
          onClose={closeModal}
        />
      )}
      <div className={`flex h-screen bg-black ${showModal ? "blur" : ""}`}>
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <ProjectList openModal={handleAddModal} onEdit={handleEditProject} />
        </main>
      </div>
    </>
  );
};

export default ProjectBoard;
