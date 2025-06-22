import { displayTask } from "../dom-related/dom";
import { createTaskStructure } from "../dom-related/dom";

const form = document.querySelector('form');

export const taskListArray = []; // an array outside of the submit eventlistener to store formData objects(tasks)

// an eventlistener for when the form is submitted. executes below function upon form submission.
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents page from auto-refreshing after submission

    const formData = new FormData(form); // creates a FormData object from the form's user submitted data upon form submission. (passes the form itself as an argument(value) so that the FormData object can capture the data from the form)
    const formArray = Array.from(formData); // creates an array from the formData object upon form submission
    taskListArray.push(formArray); // pushes the formArray to the taskListArray upon form submission
        console.log(taskListArray);

    displayTask();

    form.reset(); // clears data previously entered into the form's inputs after submission
})