document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName').value;
    if (fullName.length < 5) {
        document.getElementById('nameError').textContent = "Name must be at least 5 characters long.";
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = "";
    }

    // Validate Email
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    if (phone === "123456789" || phone.length !== 10) {
        document.getElementById('phoneError').textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = "";
    }

    // Validate Password
    const password = document.getElementById('password').value;
    const fullNameLower = fullName.toLowerCase();
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullNameLower) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters long and cannot be 'password' or your name.";
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = "";
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
