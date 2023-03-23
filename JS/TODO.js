const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
let toDos = [];


function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(toDos));
    /*현재 로컬스토리지의 저장이 안되서 새로고침하면 내 입력값이 사라짐 */
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
    saveTodo();
}


todoForm.onsubmit = todoSubmit;
const savedTodo = localStorage.getItem("todos");

if(savedTodo !== null){
    const parsedTodo = JSON.parse(saveTodo);
    toDos = parsedTodo;
    parsedTodo.forEach(printTodo);
        /*array에 각 요소마다 함수를 실행시켜주는 forEach */


}