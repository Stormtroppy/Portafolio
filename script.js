const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".main-nav");
const linkedin = document.querySelector(".fa-linkedin");
const email = document.querySelector(".fa-envelope");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});
linkedin.addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/";
});
email.addEventListener("click", function () {
  window.location.href = "mailto:Stormtroppy@example.com";
});
