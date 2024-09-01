// Pre-defined accounts
const accounts = [
    { username: "iamyou0872_09361", password: "iP3WZ6aCh5'C" },
    { username: "ed20449", password: "#364G3Y/l`£R" },
    { username: "user3", password: "pass3" },
    { username: "user4", password: "pass4" },
    { username: "user5", password: "pass5" }
];

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if the entered username and password match any pre-defined account
    const account = accounts.find(acc => acc.username === username && acc.password === password);

    if (account) {
        errorMessage.textContent = "Login successful!";
        errorMessage.style.color = "green";
        // Redirect or do something upon successful login
    } else {
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.color = "red";
    }
});
