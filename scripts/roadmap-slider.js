document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".roadmap-slide");
  const prevBtn = document.querySelector(".roadmap-nav.left");
  const nextBtn = document.querySelector(".roadmap-nav.right");

  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    current = current === 0 ? slides.length - 1 : current - 1;
    showSlide(current);
  });

  nextBtn.addEventListener("click", () => {
    current = current === slides.length - 1 ? 0 : current + 1;
    showSlide(current);
  });
});
