// Handle scroll-based animations for the timeline
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;
    
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        if (itemPosition < windowHeight * 0.75) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
});

// Preload images for better performance
function preloadImages() {
    timelineData.forEach(item => {
        const img = new Image();
        img.src = item.image;
    });
}

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', function() {
    preloadImages();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});