// Add fade-in effect to testimonials on scroll
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let delay = 0;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${delay}s`;
                delay += 0.3; // Staggered fade-in
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    testimonials.forEach(testimonial => observer.observe(testimonial));
});
