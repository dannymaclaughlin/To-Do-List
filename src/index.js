import './components/dom-related/dom.js'; // dom.js needs to be imported to entry point file (index.js) so that the code inside of it is ran
import './components/app-logic/logic.js'
import { displayForm } from './components/dom-related/dom.js';
import "./styles/styles.css"

// gets the button element with the id 'new-task-button' and assigns it to the variable 'newTaskButton'
const newTaskButton = document.getElementById('new-task-button');

// an eventlistener for when the 'NewTaskButton' is clicked
newTaskButton.addEventListener('click', function() {
    displayForm(); // displays the modal (which contains the form)
    console.log("New Task button has been clicked."); // test line
});