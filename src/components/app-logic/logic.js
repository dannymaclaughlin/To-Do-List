import { displayTask } from "../dom-related/dom";

// TASKS SECTION
const form = document.querySelector('form');

export const taskListArray = []; // an array outside of the submit eventlistener to store converted formData objects(tasks)

// an eventlistener for when the form is submitted. executes below function upon form submission.
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents page from auto-refreshing after submission

    const formData = new FormData(form); // passes a reference(to the form) into the FormData constructor — this creates a special type of iterable object.
    const formDataObject = Object.fromEntries(formData); // transforms the 'formData' iterable object into a regular object.
    taskListArray.push(formDataObject); // pushes the formDataObject to the taskListArray upon form submission
        console.log(taskListArray);
        // console.log(formDataObject.taskDescription);

    displayTask();

    form.reset(); // clears data previously entered into the form's inputs after submission
})

//  PROJECTS SECTION
const projectArray = []; // an empty array to hold all of the project objects

