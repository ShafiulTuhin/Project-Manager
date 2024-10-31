const data = [
  {
    id: crypto.randomUUID(),
    category: "To-Do" || "todo",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "2024-11-15",
  },
  {
    id: crypto.randomUUID(),
    category: "On Progress" || "inprogress",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "2024-10-15",
  },
  {
    id: crypto.randomUUID(),
    category: "Done" || "done",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "2023-05-25",
  },
  {
    id: crypto.randomUUID(),
    category: "Revise" || "revise",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "2020-10-16",
  },
  {
    id: crypto.randomUUID(),
    category: "To-Do",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "2024-10-26",
  },
  {
    id: crypto.randomUUID(),
    category: "Done",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "2021-07-29",
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
