import './components/dom-related/dom.js'; // dom.js needs to be imported to entry point file (index.js) so that the code inside of it is ran
import './components/app-logic/logic.js'

// gets the button element with the id 'new-task-button' and assigns it to the variable 'newTaskButton'
const newTaskButton = document.getElementById('new-task-button');
const tasknameOutput = document.querySelector("#task-output");
const tasknameInput = document.querySelector("#taskname");
// const submitButton = document.querySelector("#submit-button");

// an eventlistener for when the 'NewTaskButton' is clicked
    // will eventually make form pop up/display form when clicked
newTaskButton.addEventListener('click', function() {
    alert('new task form pops up');
});