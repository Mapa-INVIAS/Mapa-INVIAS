const track = document.querySelector('.aliados-track');
const btnPrev = document.querySelector('.aliados-btn.prev');
const btnNext = document.querySelector('.aliados-btn.next');

const scrollAmount = 240;

btnNext.addEventListener('click', () => {
  track.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

btnPrev.addEventListener('click', () => {
  track.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});
