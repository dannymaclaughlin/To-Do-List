const tasknameInput = document.querySelector("#taskname");
const tasknameOutput = document.querySelector("#taskname-output");
const taskDescriptionInput = document.querySelector("#task-description");
const taskDescriptionOutput = document.querySelector("#task-description-output");
const dueDateInput = document.querySelector("#due-date")
const dueDateOutput = document.querySelector("#due-date-output");
const submitButton = document.querySelector("#submit-button");

// an eventlistener for when the 'submitButton' is clicked
submitButton.addEventListener('click', function() {
    tasknameOutput.innerText = tasknameInput.value;
    taskDescriptionOutput.innerText = taskDescriptionInput.value;
    dueDateOutput.innerText = dueDateInput.value;

    // tasknameInput.remove();
});