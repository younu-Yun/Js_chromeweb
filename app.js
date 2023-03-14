const loginForm = document.getElementById('loginForm');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('.login_btn');
const greeting = document.getElementById('greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
    e.preventDefault();
    let username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    loginForm.classList.add(HIDDEN_CLASSNAME);

    setGreeting(username);
}

function setGreeting(username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener('submit', onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    //localStorage에 저장된 값이 없을때 → loginForm
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    //localStorage에 저장된 값이 있을때 → greeting 바로 호출
    setGreeting(savedUsername);
}