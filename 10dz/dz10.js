const blankTaskTitleField = document.getElementById('blankTaskTitleField');
const blankTaskPrioritySelect = document.getElementById('blankTaskPrioritySelect');
const createButton = document.getElementById('createButton');
const taskListWrapper = document.getElementById('taskListWrapper');

const taskPriorities = [{
    id: 1,
    value: 'non-urgent',
    label: 'Несрочные',
}, {
    id: 2,
    value: 'urgent',
    label: 'Срочные',
}, {
    id: 3,
    value: 'critical',
    label: 'Очень срочные',
}];

for (const taskPriority of taskPriorities) {
    const option = document.createElement('option');
    option.value = taskPriority.value;
    option.textContent = taskPriority.label;
    blankTaskPrioritySelect.appendChild(option);
}

const STORAGE_KEY = 'TODO_TASKS'
let tasks = []

function loadTasks() {
    const rawItems = localStorage.getItem(STORAGE_KEY);
    tasks = JSON.parse(rawItems);
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function changeTaskStateById(id, isDone) {
    const index = tasks.findIndex(task => task.id === id);
    const task = tasks[index];
    task.isDone = isDone
    tasks.splice(index, 1);
    if (isDone) {
        const firstCheckedIndex = tasks.findIndex(task => task.isDone === true)
        if (firstCheckedIndex === -1) {
            tasks.push(task);
        } else {
            tasks.splice(firstCheckedIndex, 0, task);
        }
    } else {
        tasks.unshift(task);
    }
    saveTasks()
    renderTasks()
}

function editTaskById(id, title, priority) {
    const index = tasks.findIndex(task => task.id === id);
    tasks[index].title = title
    tasks[index].priority = priority
    saveTasks()
    renderTasks()
}

function removeTaskById(id) {
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    saveTasks()
    renderTasks()
}

function renderTasks() {
    taskListWrapper.innerHTML = '';
    for (const task of tasks) {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.flexDirection = 'row';
        div.style.alignItems = 'center';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.isDone;
        checkbox.addEventListener('change', () => {
            changeTaskStateById(task.id, checkbox.checked);
        });
        div.appendChild(checkbox);
        const textTask = document.createElement('p');
        textTask.innerHTML = `<b>${task.title}</b>`;
        textTask.style.margin = '8px';
        if (task.isDone) {
            textTask.style.textDecoration = 'line-through';
        } else {
            textTask.style.textDecoration = 'none';
        }
        div.appendChild(textTask);
        const taskPriority = taskPriorities.find(priority => priority.id === task.priority)
        const textPriority = document.createElement('p');
        textPriority.innerHTML = `<b>${taskPriority.label}</b>`;
        textPriority.style.margin = '8px';
        div.appendChild(textPriority);
        taskListWrapper.appendChild(div);
        const editButton = document.createElement('button');
        editButton.innerHTML = `<b>Редактировать</b>`;
        editButton.style.background = 'lightyellow';
        editButton.style.marginRight = '8px';
        editButton.style.border = '2px grey solid';
        editButton.style.borderRadius = '4px';
        editButton.style.color = 'grey';
        editButton.addEventListener('click', () => {
            const editWrapper = document.createElement('div');
            editWrapper.style.display = 'flex';
            editWrapper.style.flexDirection = 'column';
            editWrapper.style.padding = '8px';
            const editField = document.createElement('input');
            editField.style.border = '2px grey solid';
            editField.style.borderRadius = '4px';
            editField.style.marginBottom = '8px';
            editField.value = task.title;
            editWrapper.appendChild(editField);
            const editSelect = document.createElement('select');        
            editSelect.style.borderRadius = '4px';
            editSelect.style.padding = '2px';
            editSelect.style.border = '2px grey solid';
            editSelect.style.marginBottom = '8px';
            for (const taskPriority of taskPriorities) {
                const option = document.createElement('option');
                option.value = taskPriority.value;
                option.textContent = taskPriority.label;
                editSelect.appendChild(option);
            }
            editSelect.value = taskPriorities.find(priority => priority.id === task.priority).value;
            editWrapper.appendChild(editSelect);
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Сохранить';
            saveButton.style.background = 'lightyellow';
            saveButton.style.marginRight = '8px';
            saveButton.style.border = '2px grey solid';
            saveButton.style.borderRadius = '4px';
            saveButton.style.color = 'grey';
            saveButton.addEventListener('click', () => {
                editTaskById(
                    task.id,
                    editField.value,
                    taskPriorities.find(priority => priority.value === editSelect.value).id,
                );
            })
            editWrapper.appendChild(saveButton);
            div.appendChild(editWrapper);
        });

        div.appendChild(editButton);
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<b>Удалить</b>`;
        deleteButton.style.background = 'red';
        deleteButton.style.border = '2px grey solid';
        deleteButton.style.borderRadius = '4px';
        deleteButton.style.color = 'white';
        deleteButton.addEventListener('click', () => {
            removeTaskById(task.id);
        });
        div.appendChild(deleteButton);
    }
}

loadTasks()
renderTasks()

createButton.addEventListener('click', () => {
    const task = {
        id: tasks.length + 1,
        title: blankTaskTitleField.value,
        priority: taskPriorities.find(priority => priority.value === blankTaskPrioritySelect.value).id,
        isDone: false,
    };
    tasks.unshift(task);
    saveTasks();
    renderTasks();
});


// function map(arr, callback) {
//     const result = []
//     for (let item of arr) {
//         result.push(callback(item))
//     }
//     return result;
// }
// console.log(map(['red', 'blue', 'yellow', 'orange'], (word) =>  word.length))
// console.log(map(['red', 'blue', 'yellow', 'orange'], (word) =>  word.split('').reverse().join('')));
