// custom.js
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.project-slider .slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Initialize the first slide
  showSlide(currentSlide);

  // Add navigation controls
  document.querySelector('.next-slide').addEventListener('click', nextSlide);
  document.querySelector('.prev-slide').addEventListener('click', prevSlide);

  // Auto-slide functionality
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
