let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(() => {
    moveSlide(1);
}, 7000);
