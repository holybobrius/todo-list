const newTask = document.querySelector("#new-task-icon");
const newTaskPopup = document.querySelector(".new-task-popup");

newTask.onclick = function() {
    newTaskPopup.style.display = "block";
}