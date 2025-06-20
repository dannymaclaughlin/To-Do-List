import { taskListArray } from "../app-logic/logic";

const tasknameInput = document.querySelector("#taskname");
const tasknameOutput = document.querySelector("#taskname-output");
const taskDescriptionInput = document.querySelector("#task-description");
const taskDescriptionOutput = document.querySelector("#task-description-output");
const dueDateInput = document.querySelector("#due-date")
const dueDateOutput = document.querySelector("#due-date-output");
const submitButton = document.querySelector("#submit-button");

// an eventlistener for when the 'submitButton' is clicked
submitButton.addEventListener('click', function() {
    // tasknameOutput.innerText = tasknameInput.value;
    // taskDescriptionOutput.innerText = taskDescriptionInput.value;
    // dueDateOutput.innerText = dueDateInput.value;

    // tasknameInput.remove();
});

// display's form
export function displayForm() {
    const modal = document.getElementById("my-modal");
    const modalOpenButton = document.getElementById("new-task-button");
    const formSubmitButton = document.getElementById("submit-button");

    modal.style.display = "block"; // when displayForm() is executed, the modal's display is set to block(visible)

    formSubmitButton.onclick = function() { // modal's display is set to none(not visible) upon click of the form submit button
        modal.style.display = "none";
    }
    
    window.onclick = function(e) { // 
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }
}

export function displayTask() {
    const taskOutputArea = document.querySelector("#task-output-area");

    const newDiv = document.createElement("div");
        newDiv.classList.add("task-div-element");
    taskOutputArea.append(newDiv);


    newDiv.innerText = tasknameInput.value;
};