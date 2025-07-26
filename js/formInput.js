document.addEventListener("DOMContentLoaded", () => {
  const formInput = document.getElementById("taskForm");
  const showTasks = document.getElementById("showTasks");
  const newTaskList = document.getElementById("newTaskList");
  const overdueTasks = document.getElementById("overdueTasksList");
  const completedTasks = document.getElementById("completedTasks");

  function main() {
    setupEventListeners();
  }

  function setupEventListeners() {
    formInput.addEventListener("submit", (event) => {
      event.preventDefault();

      const taskInput = event.target.taskInput.value;
      const dueDateInput = event.target.dueDateInput.value;
      const dueDateObj = new Date(dueDateInput);
      const formattedDueDate = new Date(dueDateObj).toLocaleDateString(
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
      }
      //  else if (dueDateObj < todayObj) {
      //   alert("Please enter a valid due date");
      //   return;
      // }

      //Show Task
      if (showTasks.classList.contains("hidden")) {
        showTasks.classList.remove("hidden");
      }

      //create new task
      const newTask = {
        id: Date.now(),
        title: taskInput,
        priority: selectPriority,
        firstDate: new Date().toISOString().split("T")[0],
        dueDate: event.target.dueDateInput.value,
        todayObj: todayObj,
        dueDateObj: dueDateObj,
        completed: false,
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
    taskDiv.id = task.id;

    taskDiv.classList.add(
      "flex",
      "flex-col",
      "p-4",
      "rounded-lg",
      "gap-2",
      "shadow-xl/30",
      "shadow-product",
      "transform",
      "hover:scale-105",
      "transition-all",
      "duration-300"
    );

    if (task.completed) {
      taskDiv.classList.add("bg-gray-200", "border-gray-300", "task-completed");
    } else if (task.priority === "low") {
      taskDiv.classList.add("bg-green-100");
    } else if (task.priority === "medium") {
      taskDiv.classList.add("bg-yellow-100");
    } else if (task.priority === "high") {
      taskDiv.classList.add("bg-red-100");
    }

    const taskTitle = document.createElement("h1");
    taskTitle.classList.add(
      "text-xl",
      "font-bold",
      "mr-4",
      "text-center",
      "text-pretty"
    );

    taskTitle.textContent = task.title;

    const taskPriority = document.createElement("p");
    taskPriority.classList.add("text-gray-600", "text-sm", "uppercase");
    taskPriority.textContent = `Priority: ${task.priority}`;

    const taskToday = document.createElement("p");
    taskToday.classList.add("text-gray-600", "text-sm");
    taskToday.textContent = `Submitted Task: ${task.today}`;

    const taskDueDate = document.createElement("p");
    taskDueDate.classList.add("text-gray-600", "text-sm");
    taskDueDate.textContent = `Due Date: ${task.dueDate}`;

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskPriority);
    taskDiv.appendChild(taskToday);
    taskDiv.appendChild(taskDueDate);

    return taskDiv;
  }

  main();
});
