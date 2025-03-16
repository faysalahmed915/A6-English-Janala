// getting id
const navbarSection = document.getElementById("navbar-section");
const banner = document.getElementById("banner-section");
const loginSection = document.getElementById("login-section");
const mainBody = document.getElementById("main-body");

const inputText = document.getElementById("input-text");
const inputPassword = document.getElementById("input-password");

// on click event
const getStarted = document.getElementById("get-started");
getStarted.addEventListener("click", event => {
    if (inputText.value === "") {
        alert("Please enter a valid id of email");
    }
    else {
        if (inputPassword.value === "123456") {
            navbarSection.classList.remove("hidden");
            banner.classList.toggle("hidden");
            mainBody.classList.remove("hidden");
        }
        else {
            alert("Please enter a valid password");
        }
    }
});
