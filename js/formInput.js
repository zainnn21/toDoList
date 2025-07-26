function main() {
  setupEventListeners();
  // handleSubmit();
}

function setupEventListeners() {
  const formInput = document.getElementById("taskForm");
  formInput.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.taskInput.value);
    handleRadioPriority();
    console.log(event.target.dueDateInput.value);
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

main();
