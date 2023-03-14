const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

function printTodo(newTodo){
    const list = document.createElement("li");
    const span = document.createElement("span");
    list.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(list);
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    printTodo(newTodo);
}



todoForm.onsubmit = todoSubmit;
