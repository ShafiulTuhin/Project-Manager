import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProjectList from "./ProjectList";
import AddProjectModal from "./AddProjectModal";
import { getAllProjects } from "./data/data";

const ProjectBoard = () => {
  const [projects, setProjects] = useState(getAllProjects);
  const [showModal, setShowModal] = useState(false);

  const handleAddProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: crypto.randomUUID() }]);
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
          <ProjectList openModal={handleAddModal} projects={projects} />
        </main>
      </div>
    </>
  );
};

export default ProjectBoard;
