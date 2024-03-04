window.addEventListener('load', function() {
    const slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach(function(element) {
        element.classList.add('loaded');
    });
});