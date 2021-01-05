const tasksContainer = document.querySelector('#tasks-container');
const listsContainer = document.querySelector('#lists-container')

function buildNewList(name) {
    const list = document.createElement('div');
    list.classList.add('list', 'container-item');
    const listName = document.createElement('p');
    listName.classList.add('list-name');
    listName.innerHTML = name;
    const deleteListButton = document.createElement('a');
    deleteListButton.classList.add('delete-list-icon');
    const deleteListIcon = document.createElement('i');
    deleteListButton.classList.add('far', 'fa-trash-alt');
    deleteListButton.appendChild(deleteListIcon);
    list.appendChild(listName);
    list.appendChild(deleteListButton);
    
    listsContainer.appendChild(list);
}

function buildNewTask(name, description, dueDate, priority) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.classList.add('container-item');
    //creating task data
    const taskData = document.createElement('div');
    taskData.classList.add('task-data');
    const taskName = document.createElement('p');
    taskName.classList.add('task-name');
    taskName.innerHTML = name;
    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('task-dueDateP');
    taskDueDate.innerHTML = `Until: ${dueDate}`;
    const taskPriority = document.createElement('p');
    taskPriority.classList.add('task-priorityP');
    taskPriority.innerHTML = `Priority: ${priority}`;
    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    taskDescription.innerHTML = `Description: ${description}`;
    taskData.appendChild(taskName);
    taskData.appendChild(taskDueDate);
    taskData.appendChild(taskPriority);
    taskData.appendChild(taskDescription);
    //creating task buttons
    const taskButtons = document.createElement('div');
    taskButtons.classList.add('task-buttons');
    //adding checked button
    const checkedTaskButton = document.createElement('a');
    checkedTaskButton.classList.add('checked-task-icon');
    const checkedIcon = document.createElement('i');
    checkedIcon.classList.add('fas', 'fa-check');
    checkedTaskButton.appendChild(checkedIcon);
    //adding expand button
    const expandTaskButton = document.createElement('a');
    expandTaskButton.classList.add('expand-task-icon');
    const expandIcon = document.createElement('i');
    expandIcon.classList.add('fas', 'fa-search');
    expandTaskButton.appendChild(expandIcon);
    //adding delete button
    const deleteTaskButton = document.createElement('a');
    deleteTaskButton.classList.add('delete-task-icon');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash-alt');
    deleteTaskButton.appendChild(deleteIcon);


    taskButtons.appendChild(checkedTaskButton);
    taskButtons.appendChild(expandTaskButton);
    taskButtons.appendChild(deleteTaskButton);
    task.appendChild(taskData);
    task.appendChild(taskButtons);
    tasksContainer.appendChild(task);

}

let expanded = false;
let checked = false;
function expandTask(expandIcon) {
    let targetTask = (expandIcon.parentElement).parentElement;
    const description = targetTask.getElementsByClassName("task-description").item(0);
    if (expanded == false) {
        targetTask.style.minHeight = "16%";
        description.style.display = "block";
        expanded = true;
    } else {
        targetTask.style.minHeight = "8%";
        description.style.display = "none";
        expanded = false;
    }
}

function checkTask(checkedIcon) {
    let targetTask = (checkedIcon.parentElement).parentElement;
    let targetData = targetTask.getElementsByClassName("task-data").item(0);
    if (checked == false) {
        targetData.style.color = "green";
        targetData.style.textDecoration = "line-through";
        checked = true;
    } else {
        targetData.style.color = "white";
        targetData.style.textDecoration = "none";
        checked = false;
    }
}

function deleteTask(deleteIcon) { 
    let targetTask = (deleteIcon.parentElement).parentElement;
    targetTask.remove();
}

function deleteList(deleteIcon) {
    let targetList = deleteIcon.parentElement;
    targetList.remove();
}

export {buildNewTask, buildNewList, expandTask, deleteTask, checkTask, deleteList}