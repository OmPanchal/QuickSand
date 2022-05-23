import getTasks from "./getTasks";

const addTask = (taskContent) => {
  window.localStorage.setItem("tasks", taskContent + ", " + getTasks());
};

export default addTask;
