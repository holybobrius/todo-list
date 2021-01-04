import {addTask} from "./newTask";

const newTask = document.querySelector("#new-task-icon");
const newTaskPopup = document.querySelector(".new-task-popup");
const closeTaskPopup = document.querySelector(".close-task-popup");
const submitTask = document.querySelector('#submit-task');

newTask.onclick = function() {
    newTaskPopup.style.display = "block";
}

closeTaskPopup.onclick = function() {
    newTaskPopup.style.display = "none";
}

submitTask.addEventListener('click', () => {
    addTask();
})

