// Navbar

const menu = document.querySelector(".menu");
const navabr = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navabr.classList.toggle("change");
  menu.classList.toggle("change");
});

// End ofNavbar
