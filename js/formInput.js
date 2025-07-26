document.addEventListener("DOMContentLoaded", () => {
  const formInput = document.getElementById("taskForm");
  const showTasks = document.getElementById("showTasks");

  function main() {
    setupEventListeners();
    // handleSubmit();
  }

  function setupEventListeners() {
    formInput.addEventListener("submit", (event) => {
      event.preventDefault();
      if (event.target.taskInput.value === "") {
        alert("Please enter a task");
        return;
      }

      if (showTasks.classList.contains("hidden")) {
        showTasks.classList.remove("hidden");
      }
      console.log(event.target.taskInput.value);
      handleRadioPriority();
      console.log(event.target.dueDateInput.value);
      taskList(event);

      formInput.reset();
    });
  }

  function handleRadioPriority() {
    const selectedRadio = document.querySelector(
      'input[name="priority"]:checked'
    );
    if (selectedRadio) {
      console.log(selectedRadio.value);
    } else {
      alert("Please select a priority");
    }
  }

  function taskList(event) {
    const newTodo = document.createElement("div");
    const taskInput = document.createElement("h1");
    const newTaskList = document.getElementById("newTaskList");
    newTodo.textContent = event.target.taskInput.value;
    newTodo.className =
      "bg-gray-300 text-gray-600 p-2 rounded-lg h-12 flex justify-between w-1/2";

    newTaskList.appendChild(newTodo);
  }

  main();
});
