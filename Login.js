const loginForm = document.querySelector(".login-form");
const logInput = loginForm.querySelector(".login-form input");
const loginButton = loginForm.querySelector(".login-form button");




function loginSubmit(event){
    event.preventDefault();
}


loginForm.submit = loginSubmit;