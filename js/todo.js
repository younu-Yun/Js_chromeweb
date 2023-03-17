const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

let todos = [];

const TODOS_KEY = "todos";

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
    const parentLi = e.target.parentElement;
    parentLi.remove();
}

function paintTodo(inputValue) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = inputValue;
    li.appendChild(span);

    button.innerText = "X";
    li.appendChild(button);
    button.addEventListener("click", deleteTodo);

    todoList.appendChild(li);
}

function todoSubmitHandler(e) {
    e.preventDefault();
    let inputValue = todoInput.value;
    todoInput.value = "";
    todos.push(inputValue);

    paintTodo(inputValue);
    saveTodo();
}

todoForm.addEventListener("submit", todoSubmitHandler);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (localStorage.getItem(TODOS_KEY) !== null) {
    let parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach((item) => paintTodo(item));
}
