const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
const toDos = [];


function saveTodo(){
    localStorage.setItem("todos", toDos)
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function printTodo(newTodo){
    const list = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.onclick = deleteTodo;
    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newTodo;
    todoList.appendChild(list);
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    toDos.push(newTodo);
    printTodo(newTodo);
}



todoForm.onsubmit = todoSubmit;
