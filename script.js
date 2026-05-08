function login() {
  const email    = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errEl    = document.getElementById("error-msg");
  const btn      = document.getElementById("signin-btn");

  errEl.style.display = "none";

  if (!email || !password) {
    errEl.textContent = "Please enter your email and password.";
    errEl.style.display = "block";
    return;
  }

  // Simple email format check
  if (!/\S+@\S+\.\S+/.test(email)) {
    errEl.textContent = "Please enter a valid email address.";
    errEl.style.display = "block";
    return;
  }

  // Demo credentials: user@example.com / 123456
  btn.disabled = true;
  btn.textContent = "Signing in…";

  setTimeout(function () {
    if (email === "charlene.deguzman@gmail.com" && password === "123456") {
      window.location.href = "dashboard.html";
    } else {
      errEl.textContent = "Invalid email or password. Try user@example.com / 123456";
      errEl.style.display = "block";
      btn.disabled = false;
      btn.textContent = "Sign In";
    }
  }, 700);
}

// Enter key support
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && document.getElementById("signin-btn")) login();
  });
});