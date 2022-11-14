//function runs on load
window.addEventListener('load', () => {
const form = document.querySelector('form');
const input = document.querySelector('#new-task-input');
const listOfTasks = document.querySelector("#tasks");

//on submit
form.addEventListener('submit', (e) => {
    //prevent page from reloading
    e.preventDefault();

    //get value from user input
    const taskToAdd = input.value;
    
    //create div with class task to carry task elements
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    //create div checkmark to create element for users to check complete
    const checkMark = document.createElement("div");
    checkMark.classList.add("check");
    taskElement.appendChild(checkMark);


    const checkButton = document.createElement("button");
    checkButton.classList.add("checkmark");
    checkMark.appendChild(checkButton);

    //add font awesome check icon
    const faIcon = document.createElement("i");
    faIcon.classList.add("fa-regular");
    faIcon.classList.add("fa-square-check");
    faIcon.classList.add("fa-lg");

    checkButton.appendChild(faIcon);

    //create task element
    const taskContent = document.createElement("div");
    taskContent.classList.add("content");

    taskElement.appendChild(taskContent);
    
    //create task text that is initially read only - will change on edit
    const taskText = document.createElement('input');
    taskText.classList.add('text');
    taskText.type = "text";
    taskText.value = taskToAdd;
    taskText.setAttribute("readonly", "readonly");

    taskContent.appendChild(taskText);

    //create action buttons
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

    //edit button actions - when edit is clicked, readonly is removed so user can edit task
    editButton.addEventListener('click', () => {
        if (editButton.innerText === "EDIT") {
            taskText.removeAttribute("readonly");
            editButton.innerText = "SAVE";
        } else {
            taskText.setAttribute("readonly", "readonly");
            editButton.innerText = "Edit";
        }
    });

    //when delete is clicked, task element is deleted and task is sent to database
    deleteButton.addEventListener('click', () => {
        const completedTask = taskToAdd;
        axios.post('task/', {'task': completedTask}).then((response)=>{
            console.log(response);
        });

        listOfTasks.removeChild(taskElement);
    });

    //if button is clicked, opacity is lowered, and vice versa
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

