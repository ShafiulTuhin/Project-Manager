import React, { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProjectList from "./ProjectList";
import AddProjectModal from "./AddProjectModal";
import { ProjectContext } from "./context";

const ProjectBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const { projectData, setProjectData } = useContext(ProjectContext);
  const [projectToUpdate, setProjectToUpdate] = useState(null);

  const handleAddEditProject = (newProject, isAdd) => {
    if (isAdd) {
      setProjectData([
        ...projectData,
        { ...newProject, id: crypto.randomUUID() },
      ]);
    } else {
      setProjectData(
        projectData.map((project) => {
          if (project.id === newProject.id) return newProject;
          return project;
        })
      );
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
