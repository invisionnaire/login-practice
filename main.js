var userLoggedIn = localStorage.getItem("username", "!Logged");
var username = document.getElementById("userName");
var pwd = document.getElementById("pwd");
var loginBtn = document.getElementById("loginBtn");
var logoutBtn = document.getElementById("logoutBtn");

logoutBtn.classList.add('hide')


loginBtn.addEventListener("click", function () {
        if (username.value === "admin" && pwd.value === "password") {
            console.log("Welcome " + username.value)
            localStorage.setItem("username", "Logged");
            loginBtn.classList.add("hide")

            var hideInput = document.querySelectorAll(".form-inputs")

            loginBtn.classList.add("hide")

            for (let i = 0; i < hideInput.length; i++) {
                hideInput[i].classList.add("hide")
            }
 
            localStorage.setItem("username", "Logged");

            loginText = document.querySelector('.card h1');
            loginText.innerHTML = "You are logged in"

            logoutBtn.classList.remove('hide')

        } else {
            console.log("Wrong username/Password")
            localStorage.setItem("username", "!Logged");
        }        
    });

logoutBtn.addEventListener("click", function() {
    localStorage.setItem("username", "!Logged");
    document.location.reload(true)
});

if(userLoggedIn == "Logged") {
    loginBtn.classList.add("hide")

            var hideInput = document.querySelectorAll(".form-inputs")

            loginBtn.classList.add("hide")
            logoutBtn.classList.remove('hide')

            for (let i = 0; i < hideInput.length; i++) {
                hideInput[i].classList.add("hide")
            }
 
            localStorage.setItem("username", "Logged");

            loginText = document.querySelector('.card h1');
            loginText.innerHTML = "You are logged in"
}








