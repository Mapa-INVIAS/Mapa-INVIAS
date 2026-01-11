document.querySelectorAll('.pipeline-block').forEach(block => {
  block.addEventListener('click', () => {
    modalTitle.textContent = block.dataset.title;
    modalText.textContent = block.dataset.text;
    modal.classList.add('show');
  });
});

document.querySelectorAll(".roadmap-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const block = toggle.closest(".pipeline-block");
    block.classList.toggle("active");
  });
});

let roadmapIndex = 0;
const roadmapSlides = document.querySelectorAll(".roadmap-slide");

function showRoadmapSlide(index) {
  roadmapSlides.forEach(s => s.classList.remove("active"));
  roadmapSlides[index].classList.add("active");
}

function nextRoadmapSlide() {
  roadmapIndex = (roadmapIndex + 1) % roadmapSlides.length;
  showRoadmapSlide(roadmapIndex);
}

function prevRoadmapSlide() {
  roadmapIndex =
    (roadmapIndex - 1 + roadmapSlides.length) % roadmapSlides.length;
  showRoadmapSlide(roadmapIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".roadmap-slide");
  const nextBtn = document.querySelector(".roadmap-nav.next");
  const prevBtn = document.querySelector(".roadmap-nav.prev");

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  showSlide(current);
});

