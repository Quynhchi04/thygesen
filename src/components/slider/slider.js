const carousel = document.querySelector('#carousel');
const carouselInner = document.querySelector('#carousel-inner');  
const carouselItems = document.querySelectorAll('#carousel-item');
const prevButton = document.querySelector('#carousel-control.prev');
const nextButton = document.querySelector('#carousel-control.next');
const itemWidth = carouselItems[0].getBoundingClientRect().width;
let currentIndex = 0;

// Set the width of the carousel-inner to contain all items
carouselInner.style.width = `${itemWidth * carouselItems.length}px`;

// Move to the previous item when the previous button is clicked
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselInner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
});

// Move to the next item when the next button is clicked
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselInner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
});