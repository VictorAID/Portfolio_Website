// custom.js

// Project Slider Functionality
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.project-slider .slide');
    const slideCount = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        showSlide(currentIndex);
    }

    // Optional: Add automatic sliding
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Optional: Add controls for manual sliding
    document.querySelector('.project-slider').insertAdjacentHTML('beforeend', `
        <button class="slider-control prev">❮</button>
        <button class="slider-control next">❯</button>
    `);

    const prevButton = document.querySelector('.slider-control.prev');
    const nextButton = document.querySelector('.slider-control.next');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
