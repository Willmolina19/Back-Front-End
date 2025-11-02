const API_URL = 'http://localhost:5000/task';

document.addEventListener('DOMContentLoaded', () => {
  fetchTasks();

  const form = document.querySelector("#task-form");
  form.addEventListener('submit', addTask);
});

async function fetchTasks() {
  const response = await fetch(API_URL);
  const tasks = await response.json();
  const taskList = document.querySelector("#task-list");
  taskList.innerHTML = "";
  tasks.forEach((task)=>{addTaskToDOM(task)});
}

async function addTask(event) {
  event.preventDefault();
  const taskInput = document.querySelector("#task-input");
  const title = taskInput.value;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title })
  });
  const newTask = await response.json();
  addTaskToDOM(newTask);
  taskInput.value = '';
}

function addTaskToDOM(task) {
  const taskList = document.querySelector("#task-list");
  const li = document.createElement("li");
  li.className = "task-item";
  if (task.completed) {
    li.classList.add("completed");
  }
  li.dataset.id = task._id;
  li.innerHTML = `
    <span>${task.title}</span>
    <div>
      <input type="checkbox" ${task.completed ? "checked" : ""} />
      <button>Eliminar</button>
    </div>
  `;
  const checkbox = li.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", toggleTask);
  const deleteButton = li.querySelector("button");
  deleteButton.addEventListener("click", deleteTask);
  taskList.appendChild(li);
}

async function toggleTask(event) {
  const li = event.target.closest("li");
  const id = li.dataset.id;
  const completed = event.target.checked;
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ completed })
  });
  li.classList.toggle("completed");
}

async function deleteTask(event) {
  const li = event.target.closest('li');
  const id = li.dataset.id;
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  li.remove();
}