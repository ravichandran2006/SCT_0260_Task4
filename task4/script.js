document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskTime = document.getElementById('taskTime');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskContent = document.createElement('span');
  taskContent.textContent = `${taskInput.value} - ${new Date(taskTime.value).toLocaleString()}`;
  taskItem.appendChild(taskContent);

  const taskActions = document.createElement('div');
  taskActions.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.className = 'complete-btn';
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
    taskContent.classList.toggle('completed');
  });

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    const newTask = prompt('Edit your task:', taskInput.value);
    const newTime = prompt('Edit the time (YYYY-MM-DDTHH:MM):', taskTime.value);
    if (newTask) taskContent.textContent = `${newTask} - ${new Date(newTime).toLocaleString()}`;
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskActions.appendChild(completeBtn);
  taskActions.appendChild(editBtn);
  taskActions.appendChild(deleteBtn);
  taskItem.appendChild(taskActions);
  taskList.appendChild(taskItem);

  taskInput.value = '';
  taskTime.value = '';
}
