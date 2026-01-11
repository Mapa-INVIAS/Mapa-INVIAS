document.addEventListener("DOMContentLoaded", () => {

  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileClose = document.querySelector(".mobile-close");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  if (!navToggle || !mobileMenu) return;

  navToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });

});

