const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
let toDos = [];

function saveTodo() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
  /*현재 로컬스토리지의 저장이 안되서 새로고침하면 내 입력값이 사라짐 */
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo();
}

function printTodo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.onclick = deleteTodo;
  list.appendChild(span);
  list.appendChild(button);
  todoList.appendChild(list);
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = { text: newTodo, id: Date.now() };
  toDos.push(newTodoObj);
  printTodo(newTodoObj);
  saveTodo();
}

todoForm.onsubmit = todoSubmit;
const savedTodo = localStorage.getItem("toDos");

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  toDos = parsedTodo;
  toDos.forEach(printTodo); /*여기가 문제인거 같은데 안돼  */
  /*array에 각 요소마다 함수를 실행시켜주는 forEach */
}
