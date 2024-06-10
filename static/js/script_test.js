// script.js
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    let index = 0;

    function showItem() {
        items.forEach((item, i) => {
            item.style.transform = `translateX(${-index * 100}%)`;
        });
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % items.length;
        showItem();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + items.length) % items.length;
        showItem();
    });

    showItem();
});
