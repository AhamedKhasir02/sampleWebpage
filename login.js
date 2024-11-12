const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}




//////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form-box.login form");
    const loginButton = document.querySelector(".form-box.login .btn");

    loginButton.addEventListener("click", function (e) {
        e.preventDefault();

        // Sample username and password for demonstration purposes
        const validUsername = "AfreenCEO";
        const validPassword = "Naaz";

        // Get input values
        const usernameInput = document.querySelector(".form-box.login input[type='text']").value;
        const passwordInput = document.querySelector(".form-box.login input[type='password']").value;

        // Simple username and password check
        if (usernameInput === validUsername && passwordInput === validPassword) {
            // Redirect to index.html if credentials are correct
            window.location.href = "home.html";
        } else {
            // Show error message if credentials are incorrect
            alert("Invalid username or password. Please try again.");
        }
    });
});
