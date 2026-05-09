function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errEl = document.getElementById("error-msg");
  const btn = document.getElementById("signin-btn");

  errEl.style.display = "none";

  // Check empty fields
  if (!email || !password) {
    errEl.textContent = "Please enter your email and password.";
    errEl.style.color = "red";
    errEl.style.display = "block";
    return;
  }

  // Validate email format
  if (!/\S+@\S+\.\S+/.test(email)) {
    errEl.textContent = "Please enter a valid email address.";
    errEl.style.color = "red";
    errEl.style.display = "block";
    return;
  }

  btn.disabled = true;
  btn.textContent = "Signing in...";

  setTimeout(function () {

    // Correct credentials
    if (email === "charlene.deguzman@gmail.com" && password === "123456") {
      errEl.textContent = "Login Successful!";
      errEl.style.color = "green";
      errEl.style.display = "block";

      setTimeout(function () {
        window.location.href = "dashboard.html";
      }, 1000);

    } else {
      errEl.textContent = "Invalid email or password.";
      errEl.style.color = "red";
      errEl.style.display = "block";

      btn.disabled = false;
      btn.textContent = "Sign In";
    }

  }, 700);
}

// Enter key support
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      login();
    }
  });
});
