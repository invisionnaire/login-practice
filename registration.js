var register = document.getElementById("register");
var username = document.getElementById("userName");
var pwd = document.getElementById("pwd");



register.addEventListener("click", function() {

    localStorage.setItem("username", userName.value )
    localStorage.setItem("password", pwd.value )
    
    console.log (userName, pwd)

});

