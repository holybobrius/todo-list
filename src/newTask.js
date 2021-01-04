import {buildNewTask} from "./DOMBuilding";

const nameField = document.querySelector("#popup-task-name-input");
const descriptionField = document.querySelector('#popup-task-description-input');
const dueDateField = document.querySelector('#popup-task-duedate-input');
const priorityField = document.querySelector('#popup-task-priority-input');
const newTaskPopup = document.querySelector(".new-task-popup");


class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function addTask() {
    if(nameField.value != "" && descriptionField.value != "" && dueDateField.value != "" && priorityField.value != "") {
        let newTask = new Task(nameField.value, descriptionField.value, dueDateField.value, priorityField.value);
        buildNewTask(newTask.name, newTask.description, newTask.dueDate, newTask.priority);
        console.log(newTask);
        newTaskPopup.style.display = "none";
    }
}

export {addTask}