const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {}

function markTaskAsComplete (taskId) {}

function deleteTask (taskId) {}

function addTask (task) {}

function showNotification(text) {}

function handleInputKeypress (event) {
    if (event.key === 'Enter') {
        const text = event.target.value;

        if ( !text){
            showNotification('Task test cannot be empty');
            return ;
        }
    }
}

addTaskUnput.addEventListener('keyup', handleInputKeypress );