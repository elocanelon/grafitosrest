document.getElementById("btn-register").addEventListener("click", register);
document.getElementById('btn-login').addEventListener("click", logIn)


/*Variables*/
var container_login_register = document.querySelector('.container-register');
var textLogin = document.querySelector('.box-text-login');
var textRegister = document.querySelector('.box-text-register');
var formLogin = document.querySelector('.login-form');
var formRegister = document.querySelector('.register-form');


function logIn() {
    container_login_register.style.left = "0px";
    textLogin.style.opacity = "0";
    textRegister.style.opacity = "1";
    formLogin.style.display = "block";
    formRegister.style.display ="none";
}

function register() {
    container_login_register.style.left = "410px";
    textLogin.style.opacity = "1";
    textRegister.style.opacity = "0";
    formLogin.style.display = "none";
    formRegister.style.display ="block";    
}