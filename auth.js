const isLoginPage = window.location.pathname.endsWith("login.html");

if (!localStorage.getItem("ariscendUser") && !isLoginPage) {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("ariscendUser");
  window.location.href = "login.html";
}
