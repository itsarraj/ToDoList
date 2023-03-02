const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function increaseCounter() {
    const count = parseInt(tasksCounter.textContent);
    tasksCounter.innerText = count+1;
}

function decreaseCounter() {
    const count = parseInt(tasksCounter.textContent);
    tasksCounter.innerText = count-1;
}

function renderList () {}

function markTaskAsComplete (taskId) {}

function deleteTask (taskId) {}

function addTask (task) {
    let li = document.createElement("li");
    li.innerText = task;
    taskList.appendChild(li);
    increaseCounter();
}

function showNotification(text) {
    alert(text);
}

function handleInputKeypress (event) {
    if (event.key === 'Enter') {
        const text = event.target.value;
        console.log(text);
        if (!text){
            showNotification('Task test cannot be empty');
        } else {
            addTask(text);
        }
    }
}

addTaskInput.addEventListener('keyup', handleInputKeypress );