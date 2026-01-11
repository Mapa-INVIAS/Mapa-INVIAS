let faunaIndex = 0;
const faunaSlides = document.querySelectorAll('.fauna-slide');

function showFaunaSlide(index) {
  faunaSlides.forEach(s => s.classList.remove('active'));
  faunaSlides[index].classList.add('active');
}

function nextFaunaSlide() {
  faunaIndex = (faunaIndex + 1) % faunaSlides.length;
  showFaunaSlide(faunaIndex);
}

function prevFaunaSlide() {
  faunaIndex = (faunaIndex - 1 + faunaSlides.length) % faunaSlides.length;
  showFaunaSlide(faunaIndex);
}
