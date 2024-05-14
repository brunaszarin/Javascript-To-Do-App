const inputBox = document.querySelector('input-box');
const listContainer = document.querySelector('list-container');
function addTasks() {
    if(inputBox.value === '') {
        alert('Please enter a task');
    }
    else {
        const newTask = document.createElement('li');
        newTask.innerText = inputBox.value;
        listContainer.appendChild(newTask);
        inputBox.value = '';
    }
}