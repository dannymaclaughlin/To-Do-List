const form = document.querySelector('form');

// an eventlistener for when the form is submitted. executes below function upon form submission.
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents page from auto-refreshing after submission

    // creates a FormData object and passes the form itself as an argument(value)
    const formData = new FormData(form);

    // iterates through the formData object and executes a function
    for (item of formData) {
        console.log(item[0], item[1]);
    }
})