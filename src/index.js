// gets the button element with the id 'new-task-button' and assigns it to the variable 'newTaskButton'
const newTaskButton = document.getElementById('new-task-button');
const tasknameOutput = document.querySelector("#task")
const taskname = document.querySelector("#taskname")

// adds a click eventlistener to 'NewTaskButton'
newTaskButton.addEventListener('click', function() {
    tasknameOutput.innerText = taskname.value;
})