import React, { useState } from "react";
import { categories } from "./data/data";

const AddProjectModal = ({ onSave, onClose }) => {
  const [project, setProject] = useState({
    id: "",
    category: "",
    title: "",
    description: "",
    date: new Date(),
  });
  const [errors, setErrors] = useState({});
  const changeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;

    setProject({
      ...project,
      [name]: value,
    });
  };
  const resetForm = () => {
    setProject({
      category: "",
      title: "",
      description: "",
      date: "",
    });
  };
  // const handleError = () => {
  //   const newErrors = {};

  //   if (!project.title) newErrors.project.title = "Please select Title";

  //   if (!project.description)
  //     newErrors.project.description = "Please input Description";

  //   if (!project.date) newErrors.project.date = "Please select Date";

  //   if (!project.category)
  //     newErrors.project.category = "Please select Category";

  //   setErrors(newErrors);
  //   console.log(newErrors);

  //   return Object.keys(newErrors).length === 0; // Return true if no errors exist
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(project);
    resetForm();
  };

  return (
    <>
      <div className=" bg-blacks bg-opacity-70 h-full w-full z-10 absolute top-20 left-1/3">
        <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              Create Task
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  for="title"
                  className="mb-1 block text-sm font-medium text-gray-300"
                ></label>
                <input
                  type="text"
                  id="taskName"
                  name="title"
                  value={project.title}
                  onChange={changeHandler}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label
                  for="description"
                  className="mb-1 block text-sm font-medium text-gray-300"
                ></label>
                <textarea
                  id="description"
                  name="description"
                  value={project.description}
                  onChange={changeHandler}
                  required
                  rows="3"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                {/* {errors?.project?.description && (
                  <p className="text-red">{errors?.project?.description}</p>
                )} */}
              </div>
              <div className="mb-4">
                <label
                  for="date"
                  className="mb-1 block text-sm font-medium text-gray-300"
                ></label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={project.date}
                  onChange={changeHandler}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label
                  for="category"
                  className="mb-1 block text-sm font-medium text-gray-300"
                ></label>
                <select
                  id="category"
                  name="category"
                  value={project.category}
                  onChange={changeHandler}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  // onClick={() => {
                  //   resetForm();
                  //   onSave(project);
                  // }}
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProjectModal;
