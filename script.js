let burger = document.querySelector(".burger-menu");
let menu = document.querySelector(".main-nav");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});
