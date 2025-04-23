let storedUsername = "";
let storedPassword = "";
let storedImage = "";

function register() {
    storedUsername = document.getElementById("regUsername").value;
    storedPassword = document.getElementById("regPassword").value;
    let file = document.getElementById("profileImage").files[0];
    
    if (file) {
        let reader = new FileReader();
        reader.onload = function(event) {
            storedImage = event.target.result;
            showLogin();
        };
        reader.readAsDataURL(file);
    } else {
        storedImage = "";
        showLogin();
    }
}

function showLogin() {
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function login() {
    let loginUsername = document.getElementById("loginUsername").value;
    let loginPassword = document.getElementById("loginPassword").value;
    let errorMessage = document.getElementById("errorMessage");

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        document.getElementById("displayUsername").textContent = storedUsername;
        document.getElementById("displayImage").src = storedImage;
        document.getElementById("login").style.display = "none";
        document.getElementById("welcome").style.display = "block";
    } else {
        errorMessage.textContent = "Invalid username or password. Try again.";
    }
}