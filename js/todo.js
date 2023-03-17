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
    const parentLiId = parentLi.id;
    console.log(parentLiId);

    parentLi.remove();
    todos = todos.filter((item) => item.id !== Number(parentLiId));
    saveTodo();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;

    span.innerText = newTodo.text;
    li.appendChild(span);

    button.innerText = "X";
    li.appendChild(button);
    button.addEventListener("click", deleteTodo);

    todoList.appendChild(li);
}

function todoSubmitHandler(e) {
    e.preventDefault();
    let newTodo = todoInput.value;
    todoInput.value = "";

    const randomId = Date.now();

    let todoObj = {
        id: randomId,
        text: newTodo,
    };

    todos.push(todoObj);

    paintTodo(todoObj);
    saveTodo();
}

todoForm.addEventListener("submit", todoSubmitHandler);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (localStorage.getItem(TODOS_KEY) !== null) {
    let parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach((item) => paintTodo(item)); //parsedTodos.forEach(paintTodo)로 간략하게 정리 가능
}
