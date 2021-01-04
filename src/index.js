import {addTask} from "./newTask";
import {expandTask, checkTask, deleteTask} from "./DOMBuilding";

const newTask = document.querySelector("#new-task-icon");
const newTaskPopup = document.querySelector(".new-task-popup");
const closeTaskPopup = document.querySelector(".close-task-popup");
const submitTask = document.querySelector('#submit-task');
let expandTaskButtons = document.querySelectorAll('.expand-task-icon');
let checkedTaskButtons = document.querySelectorAll('.checked-task-icon');
let deleteTaskButtons = document.querySelectorAll('.delete-task-icon');

newTask.onclick = function() {
    newTaskPopup.style.display = "block";
}

closeTaskPopup.onclick = function() {
    newTaskPopup.style.display = "none";
}

submitTask.addEventListener('click', () => {
    addTask();
    expandTaskButtons = document.querySelectorAll('.expand-task-icon');
    checkedTaskButtons = document.querySelectorAll('.checked-task-icon');
    deleteTaskButtons = document.querySelectorAll('.delete-task-icon');
    expandTaskButtons.forEach(expandTaskButton => expandTaskButton.onclick = function() {
        console.log(expandTaskButtons);
        expandTask(this);
    });
    checkedTaskButtons.forEach(checkedTaskButton => checkedTaskButton.onclick = function() {
        checkTask(this);
    })
    deleteTaskButtons.forEach(deleteTaskButton => deleteTaskButton.onclick = function() {
        deleteTask(this);
    })
})

console.log(expandTaskButtons)


expandTaskButtons.forEach(expandTaskButton => expandTaskButton.onclick = function() {
    console.log(expandTaskButtons);
    expandTask(this);
});

checkedTaskButtons.forEach(checkedTaskButton => checkedTaskButton.onclick = function() {
    checkTask(this);
})

deleteTaskButtons.forEach(deleteTaskButton => deleteTaskButton.onclick = function() {
    deleteTask(this);
})


