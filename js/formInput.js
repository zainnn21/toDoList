const todoForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form dari pengiriman default

  const selectedPriority = document.querySelector(
    'input[name="priority"]:checked'
  );
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const newTodoItem = document.createElement("li");
  newTodoItem.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <span class="priority-tag">${selectedPriority}</span>
    <button class="delete-btn">Delete</button>
  `;

  newTodoItem.classList.add("priority-${selectedPriority}");
  taskList.appendChild(newTodoItem);

  taskInput.value = ""; // Kosongkan input setelah menambahkan tugas
});
