const loginForm = document.querySelector(".login-form");
const logInput = loginForm.querySelector(".login-form input");
const loginButton = loginForm.querySelector(".login-form button");
const link = document.querySelector("a");
const greet = document.querySelector("#greeting");
const hidden_class = "hidden";

function loginSubmit(event){
    event.preventDefault();
    const userId = logInput.value;
    loginForm.classList.add("hidden");
    greet.innerText = `Hello ${userId}`;
    greet.classList.remove(hidden_class);
}

loginForm.onsubmit = loginSubmit;


