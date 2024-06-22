document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskLabel = document.getElementById('task-label').value;

    const task = document.createElement('div');
    task.classList.add('task', taskPriority);

    const label = document.createElement('span');
    label.classList.add('task-label');
    label.textContent = taskLabel;

    const name = document.createElement('span');
    name.textContent = taskName;

    const deadline = document.createElement('span');
    deadline.classList.add('task-deadline');
    deadline.textContent = ` (Due: ${taskDeadline})`;

    task.appendChild(label);
    task.appendChild(name);
    task.appendChild(deadline);

    document.getElementById('tasks').appendChild(task);

    document.getElementById('task-form').reset();
});
