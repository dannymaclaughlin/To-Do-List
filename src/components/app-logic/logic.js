const form = document.querySelector('form');

const taskListArray = []; // an array outside of the submit eventlistener to store formData objects(tasks)

// an eventlistener for when the form is submitted. executes below function upon form submission.
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents page from auto-refreshing after submission

    
    const formData = new FormData(form); // creates a FormData object and passes the form itself as an argument(value)
    const formArray = Array.from(formData); // creates an array from the formData objects
    taskListArray.push(formArray); // pushes the formArray to the taskListArray upon form submission

    console.log(taskListArray);
})