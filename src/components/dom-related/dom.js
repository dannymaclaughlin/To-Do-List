import { taskListArray } from "../app-logic/logic";

const tasknameInput = document.querySelector("#taskname");
const tasknameOutput = document.querySelector("#taskname-output");
const taskDescriptionInput = document.querySelector("#task-description");
const taskDescriptionOutput = document.querySelector("#task-description-output");
const dueDateInput = document.querySelector("#due-date")
const dueDateOutput = document.querySelector("#due-date-output");
const submitButton = document.querySelector("#submit-button");

// display's form
export function displayForm() {
    const modal = document.getElementById("my-modal");
    const formSubmitButton = document.getElementById("submit-button");

    modal.style.display = "block"; // when displayForm() is executed, the modal's display is set to block(visible)

    formSubmitButton.onclick = function() { // modal's display is set to none(not visible) upon click of the form submit button
        modal.style.display = "none";
    };
    
    window.onclick = function(e) { // 
        if (e.target == modal) {
            modal.style.display = "none";
        };
    };
};

export function displayTask() {
    let checkboxLabel = createTaskStructure();
        checkboxLabel.append(tasknameInput.value);
};

export function createTaskStructure() {
    const taskOutputArea = document.querySelector("#task-output-area");

    const newDiv = document.createElement("div"); // creates a new div
        newDiv.classList.add("task-div-element"); // gives the newly created div a class of ".task-div-element"
        taskOutputArea.append(newDiv); // appends newDiv to taskOutputArea
    const checkbox = document.createElement("input"); // creates an input
        checkbox.type = "checkbox"; // gives the input a type of checkbox
        checkbox.id = "checkbox";
    const checkboxLabel = document.createElement("label"); // creates a label element (for the checkbox input)
        checkboxLabel.append(checkbox); // appends the checkbox input to the label
        newDiv.append(checkboxLabel); // appends the checkbox label to newDiv
    
    const taskDescription = document.createElement("div");
        taskDescription.classList.add("task-description-div");
        newDiv.append(taskDescription);

    return checkboxLabel;
}