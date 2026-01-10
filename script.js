// Scroll-based animations for story, testimonial, and other sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const storyText = document.querySelector('.story-text');
    const storyImages = document.querySelector('.story-images');
    const testimonialText = document.querySelector('.testimonial-text');
    const testimonialImage = document.querySelector('.testimonial-image');
    const eatTogether = document.querySelector('.eat-together');
    const menuItems = document.querySelectorAll('.menu-item');

    if (storyText) observer.observe(storyText);
    if (storyImages) observer.observe(storyImages);
    if (testimonialText) observer.observe(testimonialText);
    if (testimonialImage) observer.observe(testimonialImage);
    if (eatTogether) observer.observe(eatTogether);

    menuItems.forEach(item => {
        observer.observe(item);
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });
    }
});
