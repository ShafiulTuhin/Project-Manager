const data = [
  {
    id: crypto.randomUUID(),
    category: "To-Do",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "February 20, 2024",
  },
  {
    id: crypto.randomUUID(),
    category: "On Progress",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "February 20, 2024",
  },
  {
    id: crypto.randomUUID(),
    category: "Done",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "February 20, 2024",
  },
  {
    id: crypto.randomUUID(),
    category: "Revise",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "February 20, 2024",
  },
  {
    id: crypto.randomUUID(),
    category: "To-Do",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "February 20, 2024",
  },
  {
    id: crypto.randomUUID(),
    category: "Done",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "February 20, 2024",
  },
];

function getAllProjects() {
  return data;
}

export { getAllProjects };

const categories = [
  { value: "", label: "Select Category" },
  { value: "todo", label: "To-Do" },
  { value: "inprogress", label: "On Progress" },
  { value: "done", label: "Done" },
  { value: "revise", label: "Revise" },
];

export { categories };
