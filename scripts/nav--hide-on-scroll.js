document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".carousel-section");

  if (!header || !hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Hero visible → mostrar nav
        header.classList.remove("nav-hidden");
      } else {
        // Hero fuera de vista → ocultar nav
        header.classList.add("nav-hidden");
      }
    },
    {
      threshold: 0.1
    }
  );

  observer.observe(hero);
});
