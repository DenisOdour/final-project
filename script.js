// script.js
document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    let currentIndex = 0;

    function showCard(index) {
        testimonialCards.forEach((card, i) => {
            card.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        showCard(currentIndex);
    }

    setInterval(nextCard, 5000); // Auto-slide every 5 seconds
});