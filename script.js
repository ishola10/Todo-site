const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = taskInput.value;
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  taskItem.innerHTML = `
    <div>
    <input class="checkbox" type="checkbox">
    <span>${task}</span>
    </div>
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(taskItem);
  taskInput.value = "";
});

taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    let confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      e.target.parentElement.remove();
    }
  }
});

let taskmList = document.getElementById("task-list");
taskmList.addEventListener("click", function (e) {
  if (e.target.tagName === "INPUT") {
    if (e.target.checked) {
      e.target.nextElementSibling.style.textDecoration = "line-through";
    } else {
      e.target.nextElementSibling.style.textDecoration = "none";
    }
  }
});

//lets create a clear all button that will clear all the tasks
let clearAll = document.getElementById("clear-all");
clearAll.addEventListener("click", function (e) {
  let confirmDelete = confirm("Are you sure you want to delete all tasks?");
  if (confirmDelete)
  taskList.innerHTML = "";
});
