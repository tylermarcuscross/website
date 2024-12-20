document.addEventListener('DOMContentLoaded', function() {
    /*
     * Typing Animation Section
     * Creates a typewriter effect by gradually displaying text one character at a time.
     * 1. Selects the element with class 'typing-text'
     * 2. Stores the original text and clears the element
     * 3. Uses setTimeout to add one character every 35ms
     */
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

    /*
     * Terminal-Style Navigation
     * Implements keyboard and mouse navigation for a list of links:
     * - Tracks currently selected item
     * - Allows navigation with Up/Down arrow keys
     * - Enter key triggers the selected link
     * - Mouse hover updates selection
     * - Uses modulo for circular navigation through the list
     */
    const links = document.querySelectorAll('.terminal-links li');
    let currentIndex = 0;
    
    function updateSelection(newIndex) {
        links[currentIndex].classList.remove('selected');
        currentIndex = newIndex;
        links[currentIndex].classList.add('selected');
    }
    
    updateSelection(0);
    
    links.forEach((link, index) => {
        link.addEventListener('mouseenter', () => updateSelection(index));
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') {
            updateSelection((currentIndex - 1 + links.length) % links.length);
        } else if (e.key === 'ArrowDown') {
            updateSelection((currentIndex + 1) % links.length);
        } else if (e.key === 'Enter') {
            links[currentIndex].querySelector('a').click();
        }
    });
});