const getTasks = () => {
  const tasks = window.localStorage.getItem("tasks");
  if (tasks === null) window.localStorage.setItem("tasks", "");
  return tasks === null ? [""] : tasks.split(",");
};

export default getTasks;
