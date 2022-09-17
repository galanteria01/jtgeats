const hamburger = document.querySelector(".nav--hamburger");
const navMenu = document.querySelector(".nav--menu");

hamburger.onclick = function() {
  console.log("Press me")
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}