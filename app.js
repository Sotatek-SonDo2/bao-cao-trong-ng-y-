document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.todo-form');
    const input = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');
    const clearAllBtn = document.querySelector('.clear-all-btn');
    const taskCount = document.querySelector('.task-count');

   
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

  
    function renderTodos() {

        todoList.innerHTML = '';

        taskCount.textContent = todos.length;

        todos.forEach(function(todoText, index) {

            const li = document.createElement('li');
            li.textContent = todoText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Xóa';
            deleteBtn.classList.add('delete-btn');

            deleteBtn.addEventListener('click', function() {
                removeTodo(index);
            });
            li.appendChild(deleteBtn);
            todoList.appendChild(li);

        });

        saveTodos();
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function removeTodo(index) {
        todos.splice(index, 1); 
        renderTodos();
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const newTodo = input.value.trim(); 

        if (newTodo !== '') {
            todos.push(newTodo); 
            input.value = ''; 
            renderTodos(); 
        }
    });

    clearAllBtn.addEventListener('click', function() {
        todos = []; 
        renderTodos();
    });

    renderTodos();
});
