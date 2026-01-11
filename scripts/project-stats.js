document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".section-project");
  const stats = document.querySelectorAll(".stat");

  let animated = false;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      section.classList.add("show");

      if (!animated) {
        stats.forEach(stat => {
          const number = stat.querySelector(".number");
          const target = +stat.dataset.value;
          let current = 0;
          const increment = target / 100;

          const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
              number.textContent = target.toLocaleString("es-CO");
              clearInterval(counter);
            } else {
              number.textContent = Math.floor(current).toLocaleString("es-CO");
            }
          }, 20);
        });
        animated = true;
      }
    }
  }, { threshold: 0.4 });

  observer.observe(section);
});

