let tasks = [];

function renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span>${task}</span>
            <button onclick="toggleTask(${index})">Concluir</button>
            <button onclick="editTask(${index})">Editar</button>
            <button onclick="deleteTask(${index})">Excluir</button>
        `;
        taskListElement.appendChild(taskElement);
    });
}

function addTask() {
    const newTaskInput = document.getElementById('newTaskInput');
    const newTask = newTaskInput.value.trim();

    if (newTask !== '') {
        tasks.push(newTask);
        newTaskInput.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index] = tasks[index].startsWith('Concluída: ') ? tasks[index].substring(12) : 'Concluída: ' + tasks[index];
    renderTasks();
}

function editTask(index) {
    const updatedTask = prompt('Editar tarefa:', tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask;
        renderTasks();
    }
}

function deleteTask(index) {

        tasks.splice(index, 1);
        renderTasks();
    
}

renderTasks();