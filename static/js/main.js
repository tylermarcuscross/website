document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.terminal-links li');
    let currentIndex = 0;
    
    // Initial selection
    links[currentIndex].classList.add('selected');
    
    document.addEventListener('keydown', function(e) {
        links[currentIndex].classList.remove('selected');
        
        if (e.key === 'ArrowUp') {
            currentIndex = (currentIndex - 1 + links.length) % links.length;
        } else if (e.key === 'ArrowDown') {
            currentIndex = (currentIndex + 1) % links.length;
        } else if (e.key === 'Enter') {
            links[currentIndex].querySelector('a').click();
        }
        
        links[currentIndex].classList.add('selected');
    });
});