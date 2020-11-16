// define variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');

//define event listeners
// add task to list - submit button
form.addEventListener('submit', addTask);

//remove task from list - fas fa-backspace icon
taskList.addEventListener('click', removeTask);


//addTask function
function addTask(e) {
    if (taskInput.value === '') {
        alert("Add New Task!")
    } else {
        //create li
        const li = document.createElement('li');
        //add class
        li.className = "collection-item";
        //add input value
        li.appendChild(document.createTextNode(taskInput.value));
        //link for element removing
        const link = document.createElement('a');
        // add css to link
        link.className = 'secondary-content';
        // add fas icon
        link.innerHTML = '<i class="fas fa-backspace"></i>';
        //add link into li
        li.appendChild(link);
        //add li into ul
        taskList.appendChild(li);
        //clear task input
        taskInput.value = '';

        e.preventDefault();
    }
}


//removeTask function
function removeTask(e) {
    //is click is over icon
    if (e.target.parentElement.classList.contains('secondary-content')) {
        if (confirm('Do you want to remove this task?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}
