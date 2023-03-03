let tasks = [];
const tasksList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function addTaskToDom(task) {
    const li = document.createElement('li');

    li.innerHTML =`
    '<input type="checkbox" id="${task.id}" ${task.done ? 'checked' : ''} class="custom-checkbox">
    <label for="${task.id}">${task.text}</label>
    <img src="bin.svg" class="delete" data-id="${task.id}" />
    `;
    tasksList.append(li);
}

function renderList () {
    tasksList.innerHTML = "";
    for( let i = 0; i < tasks.length; i++ ){
        addTaskToDom(tasks[i]);
    }

    tasksCounter.innerHTML = tasks.length;
}

function toggleTask (taskId) {
    const task = tasks.filter (task => task.id === taskId);

    if (task.length > 0) {
        const currentTask = tasks[0];
        currentTask.done =!currentTask.done;
        renderList();
        return;
    }
}

function deleteTask (taskId) {
    const newTasks = tasks.filter (task => task.id !== taskId);
    tasks = newTasks;
    renderList();
    return;
}

function addTask (task) {
    if ( task ){
        tasks.push(task);
        renderList();
        return;
    }

}

function showNotification(text) {
    alert(text);
}

function handleInputKeypress (event) {
    if (event.key === 'Enter') {
        const text = event.target.value;

        if ( !text){
            return ;
        }
        const task = {
            text: text,
            id: Date.now().toString(),
            done:false
        }
        event.target.value = "";
        addTask(task);
    }
}

function handleClickListener (event) {
    const target = event.target;
    console.log(target);

    if ( target.className === 'delete' ) {
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;
    } else if ( target.className === 'custom-checkbox' ) {
        const taskId = target.id;
        toggleTask(taskId);
        return;
    }

}

addTaskInput.addEventListener('keyup' , handleInputKeypress );
document.addEventListener('click', handleClickListener );