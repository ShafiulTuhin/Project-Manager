import React, { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProjectList from "./ProjectList";
import AddProjectModal from "./AddProjectModal";
import { ProjectContext } from "./context";

const ProjectBoard = () => {
  const { dispatch } = useContext(ProjectContext);
  const [projectToUpdate, setProjectToUpdate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const handleAddEditProject = (newProject, isAdd) => {
    if (isAdd) {
      dispatch({
        type: "ADD_TO_PROJECT",
        payload: {
          ...newProject,
          id: crypto.randomUUID(),
        },
      });
      alert(`Addedd ${newProject.title} Successfully`);
    } else {
      dispatch({
        type: "CHANGE_IN_PROJECT",
        payload: { ...newProject },
      });
      alert(`Edited ${newProject.title} Successfully`);
    }
    setProjectToUpdate(null);
    setShowModal(false);
  };
  const handleEditProject = (project) => {
    setProjectToUpdate(project);
    setShowModal(true);
  };

  const handleAddModal = () => {
    setProjectToUpdate(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchItem(value);
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
          <Header onSearch={handleSearch} />
          <ProjectList
            openModal={handleAddModal}
            onEdit={handleEditProject}
            searchItem={searchItem}
          />
        </main>
      </div>
    </>
  );
};

export default ProjectBoard;
