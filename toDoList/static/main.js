const { default: axios } = require("axios");

window.addEventListener('load', () => {
const form = document.querySelector('form');
const input = document.querySelector('#new-task-input');
const listOfTasks = document.querySelector("#tasks");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskToAdd = input.value;
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const checkMark = document.createElement("div");
    checkMark.classList.add("check");
    taskElement.appendChild(checkMark);


    const checkButton = document.createElement("button");
    checkButton.classList.add("checkmark");
    checkMark.appendChild(checkButton);


    const faIcon = document.createElement("i");
    faIcon.classList.add("fa-regular");
    faIcon.classList.add("fa-square-check");
    faIcon.classList.add("fa-lg");

    checkButton.appendChild(faIcon);


    const taskContent = document.createElement("div");
    taskContent.classList.add("content");

    taskElement.appendChild(taskContent);

    const taskText = document.createElement('input');
    taskText.classList.add('text');
    taskText.type = "text";
    taskText.value = taskToAdd;
    taskText.setAttribute("readonly", "readonly");

    taskContent.appendChild(taskText);

    const actions = document.createElement('actions');
    actions.classList.add('actions');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerText = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'Delete';


    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    taskElement.appendChild(actions);


    listOfTasks.appendChild(taskElement);

    input.value = '';

    editButton.addEventListener('click', () => {
        if (editButton.innerText === "EDIT") {
            taskText.removeAttribute("readonly");
            editButton.innerText = "SAVE";
        } else {
            taskText.setAttribute("readonly", "readonly");
            editButton.innerText = "Edit";
        }
    });

    deleteButton.addEventListener('click', () => {
        const completedTask = taskToAdd;
        axios.post('task', {'task': completedTask}).then((response)=>{
            console.log(response)
        });

        listOfTasks.removeChild(taskElement);
    });

    checkButton.addEventListener('click', () => {
        var currentOpacity = window.getComputedStyle(taskElement).opacity;
        if (currentOpacity === "0.5") {
            taskElement.style.opacity = 1;
        } else {
            taskElement.style.opacity = 0.5;
        }
    });

});


});

