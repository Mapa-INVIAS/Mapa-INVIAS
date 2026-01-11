/* ================= PROJECT SLIDER ================= */

let projectIndex = 0;
const projectSlides = document.querySelectorAll(".project-slide");

function showProjectSlide(index) {
  projectSlides.forEach(slide => slide.classList.remove("active"));
  projectSlides[index].classList.add("active");
}

function nextProjectSlide() {
  projectIndex = (projectIndex + 1) % projectSlides.length;
  showProjectSlide(projectIndex);
}

function prevProjectSlide() {
  projectIndex = (projectIndex - 1 + projectSlides.length) % projectSlides.length;
  showProjectSlide(projectIndex);
}

/* ================= SLIDE 2 - REGIONES ================= */

let regionIndex = 0;
const regionImages = document.querySelectorAll(".region-img");
const regionDots = document.querySelectorAll(".dot");

function goRegion(index) {
  regionImages.forEach(img => img.classList.remove("active"));
  regionDots.forEach(dot => dot.classList.remove("active"));

  regionImages[index].classList.add("active");
  regionDots[index].classList.add("active");

  regionIndex = index;
}
