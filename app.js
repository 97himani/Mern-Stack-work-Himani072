// In-memory "database"
const users = [
    { name: "Admin", email: "admin@example.com", password: "Admin@123", role: "admin" },
    { name: "John Doe", email: "john@example.com", password: "John@1234", role: "normal_user" },
  ];
  
  // Role-Based Redirection
  function redirectToDashboard(role) {
    if (role === "admin") {
      window.location.href = "admin.html"; // Redirect to admin dashboard
    } else if (role === "normal_user") {
      window.location.href = "dashboard.html"; // Redirect to user dashboard
    } else {
      alert("Invalid role. Contact the administrator.");
    }
  }
  
  // Login Handler
  function handleLogin(email, password) {
    const user = users.find((u) => u.email === email);
  
    if (!user) {
      alert("User not found! Please register.");
      return;
    }
  
    if (user.password === password) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(user)); // Save logged-in user
      alert(`Welcome, ${user.name}!`);
      redirectToDashboard(user.role);
    } else {
      alert("Incorrect password. Please try again.");
    }
  }
  
  // Event Listener for Login Form
  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("login-form")) {
      document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        handleLogin(email, password);
      });
    }
  
    if (document.getElementById("logout-btn")) {
      document.getElementById("logout-btn").addEventListener("click", () => {
        sessionStorage.removeItem("loggedInUser"); // Clear session
        window.location.href = "index.html"; // Redirect to login page
      });
    }
  });
  