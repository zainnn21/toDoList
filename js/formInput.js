const showTask = document.querySelector("#showTasks");
const showCompleted = document.querySelector("#showCompleted");
const newTaskList = document.querySelector("#newTaskList");
const taskForm = document.querySelector("#taskForm");

document.addEventListener("DOMContentLoaded", () => {
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskInput = document.querySelector("#taskInput");
    const taskPriority = document.querySelector(
      "[name=priority]:checked"
    ).value;
    const dueDate = document.querySelector("#dueDateInput");
    const today = new Date().toISOString().split("T")[0];

    console.log(
      "ambil data",
      taskInput.value,
      taskPriority,
      dueDate.value,
      today
    );

    if (taskInput.value === "" || dueDate.value === "") {
      alert("Please enter a task and due date.");
      return;
    }

    // if (dueDate.value < today) {
    //   alert("Due date cannot be in the past.");
    //   return;
    // }

    const task = {
      id: Date.now(),
      task: taskInput.value,
      priority: taskPriority,
      dueDate: dueDate.value,
      today: today,
      completed: false,
    };

    if (task != "") {
      showTask.classList.remove("hidden");
    }

    //create element
    createElementTask(task);

    if (completed === true) {
      if (showCompleted.classList.contains("hidden")) {
        showCompleted.classList.remove("hidden");
      }
      moveToCompleted(task);
    }

    taskForm.reset();
  });

  const createElementTask = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add(
      "w-full",
      "p-6",
      "rounded-lg",
      "shadow-xl/30",
      "mb-4",
      "transform",
      "transition-transform",
      "duration-300",
      "hover:scale-105",
      "cursor-pointer"
    );

    console.log(task.priority);

    if (task.priority === "low") {
      taskDiv.classList.add("bg-green-100");
    } else if (task.priority === "medium") {
      taskDiv.classList.add("bg-yellow-100");
    } else if (task.priority === "high") {
      taskDiv.classList.add("bg-red-100");
    }

    const titleContainer = document.createElement("div");
    titleContainer.classList.add(
      "flex",
      "items-center",
      "mb-4",
      "justify-between"
    );

    const completed = document.createElement("input");
    completed.type = "checkbox";
    completed.classList.add("w-6", "h-6");
    completed.addEventListener("change", () => {
      task.completed = completed.checked;
      if (task.completed) {
        taskTitle.classList.add(
          "line-through",
          "decoration-red-600",
          "decoration-4"
        );
      } else {
        taskTitle.classList.remove("line-through");
      }
    });

    const taskTitle = document.createElement("h1");
    taskTitle.classList.add(
      "text-2xl",
      "font-bold",
      "text-center",
      "text-wrap",
      "uppercase"
    );
    taskTitle.textContent = task.task;

    const taskPriority = document.createElement("h2");
    taskPriority.classList.add("text-gray-600", "font-bold", "uppercase");
    taskPriority.textContent = `Priority: ${task.priority}`;

    const today = document.createElement("h2");
    today.classList.add("text-gray-600");
    today.textContent = `Task Created: ${task.today}`;

    const taskDueDate = document.createElement("h2");
    taskDueDate.classList.add("text-gray-600");
    taskDueDate.textContent = `Due Date: ${task.dueDate}`;

    if (task.dueDate < task.today) {
      taskPriority.textContent = `Priority: ${task.priority} - OVERDUE!!`;
      taskDiv.classList.add("bg-red-300");
    }

    titleContainer.appendChild(taskTitle);
    titleContainer.appendChild(completed);
    taskDiv.appendChild(titleContainer);
    taskDiv.appendChild(taskPriority);
    taskDiv.appendChild(today);
    taskDiv.appendChild(taskDueDate);
    newTaskList.appendChild(taskDiv);
  };

  const moveToCompleted = (task) => {
    const completedTasks = document.querySelector("#completedTasks");
    const taskDiv = document.createElement("div");
    taskDiv.classList.add(
      "w-full",
      "p-6",
      "rounded-lg",
      "shadow-xl/30",
      "mb-4",
      "transform",
      "transition-transform",
      "duration-300",
      "hover:scale-105",
      "cursor-pointer"
    );
    taskDiv.classList.add("bg-gray-300");
    taskDiv.textContent = task.task;
    completedTasks.appendChild(taskDiv);
  };
});
