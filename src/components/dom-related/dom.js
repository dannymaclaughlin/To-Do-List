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
    const modal = document.getElementById("my-modal"); // grabs the html element with the ID "my-modal" and assigns it to the "modal" variable
    const formSubmitButton = document.getElementById("submit-button"); // grabs the submit button html element and assigns it to a variable.

    modal.style.display = "block"; // when displayForm() is executed, the modal's display is set to block(visible). by default, the modal's display is set to none via the styles.css file

    formSubmitButton.onclick = function() { // modal's display is set to none(not visible) upon click of the form submit button
        modal.style.display = "none";
    };
    
    window.onclick = function(e) { // clicking anywhere outside of the modal sets the modal's display to none
        if (e.target == modal) {
            modal.style.display = "none";
        };
    };
};

export function displayTask() {
    let { checkboxLabel, taskDescription, dueDate } = createTaskStructure(); // creates a reference to the returned elements of the createTaskStructure function
        checkboxLabel.append(tasknameInput.value); // appends the value of tasknameInput to checkboxLabel(which is essentially a reference to checkboxLabel in the createTaskStructure function
        taskDescription.append(taskDescriptionInput.value);
        dueDate.append(dueDateInput.value);
};

let counter = 0; // counter used in createDiv() function. moved outside of the createTaskStructure function for persistance.
export function createTaskStructure() { // creates the structure of what an individual task should look like
    const taskOutputArea = document.querySelector("#task-output-area");

    function createDiv() {
        const newDiv = document.createElement("div"); // creates a new div
        newDiv.classList.add('task-div-element' + counter); // gives the newly created div a class of ".task-div-element"
        taskOutputArea.append(newDiv); // appends newDiv to taskOutputArea
        counter++;
        console.log(counter);

        return newDiv;
    }
    const newDiv = createDiv();

    const checkbox = document.createElement("input"); // creates an input
        checkbox.type = "checkbox"; // gives the input a type of checkbox
        checkbox.id = "checkbox";
    const checkboxLabel = document.createElement("label"); // creates a label element (for the checkbox input)
        checkboxLabel.append(checkbox); // appends the checkbox input to the label
        newDiv.append(checkboxLabel); // appends the checkbox label to newDiv
    
    const taskContentContainer = document.createElement("div");
        taskContentContainer.classList.add("task-content-container-div");
        newDiv.append(taskContentContainer);
        const spacerDiv = document.createElement("div");
            spacerDiv.classList.add("spacer-div");
            taskContentContainer.append(spacerDiv);
        const taskContentDiv = document.createElement("div");
            taskContentDiv.classList.add("task-content-div");
            taskContentContainer.append(taskContentDiv);
    
    const taskDescription = document.createElement("div");
        taskDescription.classList.add("task-description-div");
        taskContentDiv.append(taskDescription);

    const dueDate = document.createElement("div");
        dueDate.classList.add("duedate-div");
        taskContentDiv.append(dueDate);

        const deleteButton = document.createElement("button");
            deleteButton.id = "delete-button";
            deleteButton.textContent = "Delete";
            taskContentDiv.append(deleteButton);
            deleteButton.addEventListener("click", function() {
                console.log("delete button clicked");
            })

    return { checkboxLabel, taskDescription, dueDate, deleteButton }; // returns checkboxLabel so that it can be used outside of this createTaskStructure function
}

// export function deleteTask() {
//     alert('test. delete button clicked!');
// };