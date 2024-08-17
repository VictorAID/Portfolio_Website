// assets/custom.js

// document.addEventListener("DOMContentLoaded", function() {
//     const prevButton = document.querySelector(".prev-slide");
//     const nextButton = document.querySelector(".next-slide");
//     const slider = document.querySelector(".project-slider");

//     prevButton.addEventListener("click", function() {
//         slider.scrollBy({
//             left: -slider.offsetWidth,
//             behavior: "smooth"
//         });
//     });

//     nextButton.addEventListener("click", function() {
//         slider.scrollBy({
//             left: slider.offsetWidth,
//             behavior: "smooth"
//         });
//     });
// });


let index = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  if (n >= totalSlides) index = 0;
  if (n < 0) index = totalSlides - 1;

  document.querySelector('.slide-container').style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector('.next-slide').addEventListener('click', () => {
  index++;
  showSlide(index);
});

document.querySelector('.prev-slide').addEventListener('click', () => {
  index--;
  showSlide(index);
});

// Optionally, you can add auto-slide functionality
setInterval(() => {
  index++;
  showSlide(index);
}, 3000);
