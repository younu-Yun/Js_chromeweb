const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

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
    paintTodo(inputValue);
}

todoForm.addEventListener("submit", todoSubmitHandler);
