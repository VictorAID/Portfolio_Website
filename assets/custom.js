// assets/custom.js

document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");
    const slider = document.querySelector(".project-slider");

    prevButton.addEventListener("click", function() {
        slider.scrollBy({
            left: -slider.offsetWidth,
            behavior: "smooth"
        });
    });

    nextButton.addEventListener("click", function() {
        slider.scrollBy({
            left: slider.offsetWidth,
            behavior: "smooth"
        });
    });
});
