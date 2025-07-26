document.addEventListener("DOMContentLoaded", () => {
  const formInput = document.getElementById("taskForm");
  const showTasks = document.getElementById("showTasks");
  const newTaskList = document.getElementById("newTaskList");

  function main() {
    setupEventListeners();
    // handleSubmit();
  }

  function setupEventListeners() {
    formInput.addEventListener("submit", (event) => {
      event.preventDefault();

      const taskInput = event.target.taskInput.value;
      const dueDateInput = event.target.dueDateInput.value;
      const dueDateObj = new Date(dueDateInput);
      const formattedDueDate = new Date(dueDateInput).toLocaleDateString(
        "id-ID",
        {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      );
      const todayObj = new Date();
      const formattedToday = today.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const selectPriority = getSelectedPriority();

      //Validation
      if (taskInput === "" || dueDateInput === "") {
        alert("Please enter a task and a due date");
        return;
      } else if (dueDateObj < todayObj) {
        alert("Please enter a valid due date");
        return;
      }

      //Show Task
      if (showTasks.classList.contains("hidden")) {
        showTasks.classList.remove("hidden");
      }

      //create new task
      const newTask = {
        title: taskInput,
        today: formattedToday,
        dueDate: formattedDueDate,
        priority: selectPriority,
      };
      console.log(newTask);

      //create task element
      const taskElement = createTaskElement(newTask);
      newTaskList.appendChild(taskElement);

      formInput.reset();
    });
  }

  function getSelectedPriority() {
    const selectedRadio = document.querySelector(
      'input[name="priority"]:checked'
    );
    if (selectedRadio) {
      return selectedRadio.value;
    } else {
      alert("Please select a priority");
    }
  }

  function createTaskElement(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add(
      "flex",
      "flex-col",
      "bg-gray-300",
      "p-4",
      "rounded-lg",
      "gap-2",
      "w-1/2",
      "justify-between"
    );

    const taskTitle = document.createElement("h1");
    taskTitle.classList.add("text-xl", "font-bold", "mr-4", "text-center");
    taskTitle.textContent = task.title;

    const taskToday = document.createElement("p");
    taskToday.classList.add("text-gray-600", "text-sm");
    taskToday.textContent = `Submitted Task: ${task.today}`;

    const taskDueDate = document.createElement("p");
    taskDueDate.classList.add("text-gray-600", "text-sm");
    taskDueDate.textContent = `Due Date: ${task.dueDate}`;

    const taskPriority = document.createElement("p");
    taskPriority.classList.add("text-gray-600", "text-sm");
    taskPriority.textContent = `Priority: ${task.priority}`;

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskToday);
    taskDiv.appendChild(taskDueDate);
    taskDiv.appendChild(taskPriority);

    return taskDiv;
  }

  main();
});
