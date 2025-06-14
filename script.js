document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const message = [];

        if (username.length < 3) {
            isValid = false;
            message.push("Username must be at least 3 characters long.")
        }

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            message.push("Wrong email format! please try with a valid email.")
        }

        if (password.length < 8) {
            isValid = false;
            message.push('Password must be at least 8 characters long.');
        }

        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration succsseful! 🎉"
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.backgroundColor = "#d4edda"
        } else {
            feedbackDiv.innerHTML = message.join("<br>");
            feedbackDiv.style.color = "#d800c"
            feedbackDiv.backgroundColor = "#ffbaba"
        }
    });
});
