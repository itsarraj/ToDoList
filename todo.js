
    let tasks = [];
    const tasksList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    const tasksCounter = document.getElementById('tasks-counter');

    async function fetchTodos() {
        // //Get Request
        // fetch('https://jsonplaceholder.typicode.com/todos') // this returns promise
        // .then(function(response) {
        //     // console.log(response);
        //     return response.json(); // converting JSON , again returns promise
        // }).then(function(data) {
        //     tasks = data.slice(0, 10);
        //     renderList(tasks)
        // })
        // .catch(function(err) {
        //     console.log('error',err);
        // })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            tasks = data.slice(0,10);
            renderList();
        } catch (error) {
            console.log(error);
        }
    }


    function addTaskToDom(task) {
        const li = document.createElement('li');

        li.innerHTML =`
        '<input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
        <label for="${task.id}">${task.title}</label>
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
        const task = tasks.filter (task => task.id === Number(taskId));

        if (task.length > 0) {
            const currentTask = task[0];
            currentTask.completed =!currentTask.completed;
            renderList();
            return;
        }
    }

    function deleteTask (taskId) {
        const newTasks = tasks.filter (task => task.id !== Number(taskId) );
        tasks = newTasks;
        renderList();
        return;
    }

    function addTask (task) {
        if ( task ){
            // fetch('https://jsonplaceholder.typicode.com/todos' , {
            //     method: "POST", // or 'PUT'
            //     headers: {
            //         "Content-Type": "application/json",
            //       },
            //       body: JSON.stringify(data),
            // } )
            // .then(function(response) {
            //     return response.json();
            // }).then(function(data) {
            //     console.log(data);
            //     tasks.push(task);
            //     renderList();
            // })
            // .catch(function(err) {
            //     console.log('error',err);
            // })
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
                title: text,
                id: tasks.length +  1 ,
                completed:false
            }
            event.target.value = "";
            addTask(task);
        }
    }

    function handleClickListener (event) {
        const target = event.target;
        // console.log(target);

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

    function initializeApp() {
        fetchTodos();
        addTaskInput.addEventListener('keyup' , handleInputKeypress );
        document.addEventListener('click', handleClickListener );

    }

    initializeApp();
