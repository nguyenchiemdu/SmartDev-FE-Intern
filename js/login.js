var loginForm = document.getElementById("login-form");
var loginButton = loginForm['login'];
loginButton.onclick = (e) => {
    var isValid = false;
    e.preventDefault();
    var listUsers = localStorage.getItem('listUsers');
    listUsers = JSON.parse(listUsers);
    listUsers.forEach(user => {
        if (user.email == loginForm['email'].value && user.password == loginForm['password'].value) 
            isValid = true;
    });
    if (isValid) {
        localStorage.setItem('currentUser',loginForm['email'].value.split('@')[0]);
        window.location.pathname = "./index.html";
        window.location;
    }
    else {
        document.getElementById('login-notification').innerHTML = "Invalid username or password"
    } 
}