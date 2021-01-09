import {buildNewTask, buildNewList} from "./DOMBuilding";

const nameField = document.querySelector("#popup-task-name-input");
const descriptionField = document.querySelector('#popup-task-description-input');
const dueDateField = document.querySelector('#popup-task-duedate-input');
const priorityField = document.querySelector('#popup-task-priority-input');
const newTaskPopup = document.querySelector(".new-task-popup");


let listsArr = [];

class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class List {
    constructor(name) {
        this.name = name;
        this.content = [];
    }

    addTaskToList(task) { 
        this.content.push(task);
    }
}

let currentList = new List("Default");
listsArr.push(currentList);

function addTask() {
    if(nameField.value != "" && descriptionField.value != "" && dueDateField.value != "" && priorityField.value != "") {
        let newTask = new Task(nameField.value, descriptionField.value, dueDateField.value, priorityField.value);
        currentList.content.push(newTask);
        buildNewTask(newTask.name, newTask.description, newTask.dueDate, newTask.priority);
        console.log(newTask);
        newTaskPopup.style.display = "none";
        console.log(currentList);
    }
}

const listNameField = document.querySelector('#popup-list-name-input');
const newListPopup = document.querySelector('.new-list-popup');




function addList() {
    if(listNameField.value != "") {
        let newList = new List(listNameField.value);
        buildNewList(newList.name);
        listsArr.push(newList);
        console.table(`Lists array: ${listsArr}`);
        newListPopup.style.display = "none";
        console.log(newList.content);
    }
}





export {addList, addTask}