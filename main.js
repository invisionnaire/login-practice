var username = document.getElementById("userName");
var pwd = document.getElementById("pwd");
var loginBtn = document.getElementById("loginBtn");
var logoutBtn = document.getElementById("logoutBtn");
var register = document.getElementById("register");

var getUsername = localStorage.getItem("username")
var getPassword = localStorage.getItem("password")
var getStatus = localStorage.getItem("status")

logoutBtn.classList.add('hide')


loginBtn.addEventListener("click", function () {
        if (username.value === getUsername && pwd.value === getPassword) {
            console.log("Welcome " + username.value)
            localStorage.setItem("status", "Logged");
            loginBtn.classList.add("hide")

            var hideInput = document.querySelectorAll(".form-inputs")

            loginBtn.classList.add("hide")
            loginBtn.classList.add("hide")
            register.classList.add("hide")

            for (let i = 0; i < hideInput.length; i++) {
                hideInput[i].classList.add("hide")
            }

            loginText = document.querySelector('.card h1');
            loginText.innerHTML = "You are logged in"

            logoutBtn.classList.remove('hide')
            localStorage.setItem("status", "Logged");

        } else {
            console.log("Wrong username/Password")
            localStorage.setItem("status", "!Logged");
        }        
    });

logoutBtn.addEventListener("click", function() {
    localStorage.setItem("status", "!logged");
    document.location.reload(true)
});

if(getStatus == "logged") {
    loginBtn.classList.add("hide")

            var hideInput = document.querySelectorAll(".form-inputs")

            loginBtn.classList.add("hide")
            register.classList.add("hide")
            logoutBtn.classList.remove('hide')

            for (let i = 0; i < hideInput.length; i++) {
                hideInput[i].classList.add("hide")
            }
 
            loginText = document.querySelector('.card h1');
            loginText.innerHTML = "You are logged in"
}

