const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

// Loop back to first or last image for infinite carousel effect
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].alt === 'Image 1' && counter === carouselImages.length - 1) {
        carouselSlide.style.transition = "none";
        counter = 1;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if (carouselImages[counter].alt === 'Image 1' && counter === 0) {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});
