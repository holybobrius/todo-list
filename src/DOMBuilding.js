const tasksContainer = document.querySelector('#tasks-container');

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
    taskData.appendChild(taskName);
    taskData.appendChild(taskDueDate);
    taskData.appendChild(taskPriority);
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

export {buildNewTask}