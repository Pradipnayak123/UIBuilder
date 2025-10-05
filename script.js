document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // prevent page reload
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Demo login credentials
    let validUser = "admin";
    let validPass = "12345";

    if(username === validUser && password === validPass){
        message.style.color = "green";
        message.textContent = "Login Successful 🎉";
        // You can redirect to another page:
        // window.location.href = "welcome.html";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid Username or Password ❌";
    }
});
