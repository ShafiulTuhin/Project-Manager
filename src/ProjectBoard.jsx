import React, { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProjectList from "./ProjectList";
import AddProjectModal from "./AddProjectModal";
import { ProjectContext } from "./context";

const ProjectBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const { projectData, setProjectData } = useContext(ProjectContext);

  const handleAddProject = (newProject) => {
    setProjectData([
      ...projectData,
      { ...newProject, id: crypto.randomUUID() },
    ]);
    setShowModal(false);
  };
  // console.log(projects);
  const handleAddModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <AddProjectModal onSave={handleAddProject} onClose={closeModal} />
      )}
      <div className={`flex h-screen bg-black ${showModal ? "blur" : ""}`}>
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <ProjectList openModal={handleAddModal} />
        </main>
      </div>
    </>
  );
};

export default ProjectBoard;
