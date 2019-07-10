const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.slider-item')

// buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter

let counter = 1;
const size = 1200;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

console.log(carouselItems);

// button listeners

nextBtn.addEventListener('click', () => {
    if (counter >= carouselItems.length - 1) return;
    counter++;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
counter--;
carouselSlide.style.transition = "transform 0.4s ease-in-out";
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

carouselSlide.addEventListener('transitionend', () => {
    if (carouselItems[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselItems.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselItems[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselItems.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})


// logger