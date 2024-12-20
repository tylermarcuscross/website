document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.typing-text');
    const content = text.textContent;
    text.textContent = '';
    let i = 0;

    function type() {
        if (i < content.length) {
            text.textContent = content.slice(0, i + 1);
            i++;
            setTimeout(type, 35);
        }
    }

    type();

    const links = document.querySelectorAll('.terminal-links li');
    let currentIndex = 0;
    
    links[currentIndex].classList.add('selected');
    
    links.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
            links[currentIndex].classList.remove('selected');
            currentIndex = index;
            links[currentIndex].classList.add('selected');
        });
    });
    
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