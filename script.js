const pass = document.getElementById('password');
const show = document.getElementById('showPass');
const hideOrShow = document.querySelector('.hide-or-show');

show.addEventListener("change", () => {
  const passHide = pass.getAttribute("type") === "password" ? "text" : "password";

  pass.setAttribute("type", passHide);

  hideOrShow.innerHTML = passHide === "password" ? "Mostrar senha" : "Ocultar senha"
});