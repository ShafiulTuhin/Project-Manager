const data = [
  {
    id: crypto.randomUUID(),
    category: "todo",
    title: "Bangladesh War-1971",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "2024-11-15",
  },
  {
    id: crypto.randomUUID(),
    category: "inprogress",
    title: "Web Applications",
    description:
      "Bangladesh, officially the People's Republic of Bangladesh, is a country in South Asia",

    date: "2024-10-15",
  },
  {
    id: crypto.randomUUID(),
    category: "done",
    title: "Learn MERN Stack Web Programming",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "2023-05-25",
  },
  {
    id: crypto.randomUUID(),
    category: "revise",
    title: "Content Writer Content Writer Content Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "2020-10-16",
  },
  {
    id: crypto.randomUUID(),
    category: "todo",
    title: "Cultural and festival rules of...",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere quisquam!animi.",

    date: "2024-10-26",
  },
  {
    id: crypto.randomUUID(),
    category: "done",
    title: "Next Js is React Native is Next",
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
