// Get references
const lengthEl = document.getElementById('length');
const ucEl = document.getElementById('uppercase');
const lcEl = document.getElementById('lowercase');
const numEl = document.getElementById('number');
const ssEl = document.getElementById('special');

function passwordValidator(password) {
    password = password.trim();
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;

    // Check each character once
    for (let i = 0; i < password.length; i++) {
        let code = password.charCodeAt(i);

        if (code >= 65 && code <= 90) hasUpper = true; // A-Z
        else if (code >= 97 && code <= 122) hasLower = true; // a-z
        else if (code >= 48 && code <= 57) hasNumber = true; // 0-9
        else hasSpecial = true; // anything else is special
    }

    // Length check
    updateUI(lengthEl, password.length >= 8, "8 characters");

    // Uppercase check
    updateUI(ucEl, hasUpper, "one uppercase letter");

    // Lowercase check
    updateUI(lcEl, hasLower, "one lowercase letter");

    // Special symbol check
    updateUI(ssEl, hasSpecial, "one special symbol");

    // Number check
    updateUI(numEl, hasNumber, "one digit");
}

// Helper to update messages
function updateUI(element, condition, requirement) {
    if (condition) {
        element.innerHTML = `Your password has at least ${requirement}`;
        element.style.color = "green";
    } else {
        element.innerHTML = `Your password doesn't have at least ${requirement}`;
        element.style.color = "red";
    }
}
