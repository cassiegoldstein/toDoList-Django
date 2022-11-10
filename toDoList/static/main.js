window.addEventListener('load', () => {
const form = document.querySelector('form');
const input = document.querySelector('#new-task-input');
const listOfTasks = document.querySelector("#tasks");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskToAdd = input.value;
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
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
        if(editButton.innerText === "Edit"){
            taskText.removeAttribute("readonly");
            editButton.innerText = "Save";
        }
        else{
            taskText.setAttribute("readonly", "readonly");
            editButton.innerText = "Edit";
        }
    });
    
     deleteButton.addEventListener('click', () => {
        listOfTasks.removeChild(taskElement);
    });
    

});

});

