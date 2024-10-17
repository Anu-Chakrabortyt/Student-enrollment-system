document.addEventListener("DOMContentLoaded", function() {
    // Handle Login
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Simulate login process
      if(email === "student@example.com" && password === "12345") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard (you can create this page separately)
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  
    // Handle Sign Up
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
  
      // Simulate sign-up process
      if (name && email && password) {
        alert("Sign-up successful!");
        window.location.href = "login.html";
      } else {
        alert("Please fill all the fields.");
      }
    });
  });
  