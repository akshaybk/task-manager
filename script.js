document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") return;

    let taskList = document.getElementById("task-list");

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
        saveTasks();
    });

    let span = document.createElement("span");
    span.textContent = taskValue;

    let div = document.createElement("div");
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");
    editBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        editTask(this);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", function () {
        deleteTask(this);
    });

    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(div);

    taskList.appendChild(li);
    taskInput.value = "";

    saveTasks();
}



function editTask(button) {
    event.stopPropagation();
    let li = button.parentElement.parentElement;
    let taskText = li.querySelector("span").textContent;
    let newTask = prompt("Edit your task:", taskText);

    if (newTask !== null && newTask.trim() !== "") {
        li.querySelector("span").textContent = newTask.trim();
        saveTasks();
    }
}


function deleteTask(button) {
    button.parentElement.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#task-list li").forEach((task) => {
        let checkbox = task.querySelector("input[type='checkbox']");
        tasks.push({
            text: task.querySelector("span").textContent,
            completed: checkbox.checked // Store checkbox state
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("task-list");

    tasks.forEach((task) => {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed", checkbox.checked);
            saveTasks();
        });

        let span = document.createElement("span");
        span.textContent = task.text;

        let div = document.createElement("div");
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit");
        editBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            editTask(this);
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", function () {
            deleteTask(this);
        });

        div.appendChild(editBtn);
        div.appendChild(deleteBtn);
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(div);

        if (task.completed) li.classList.add("completed");

        taskList.appendChild(li);
    });
}

