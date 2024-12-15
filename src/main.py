from fasthtml.common import *
# Define ASCII art constant here - paste your art between the triple quotes
# ASCII Art from https://www.asciiart.eu/text-to-ascii-art


ASCII_ART = """
    ███     ▄██   ▄    ▄█          ▄████████    ▄████████       ▄████████    ▄████████  ▄██████▄     ▄████████    ▄████████
▀█████████▄ ███   ██▄ ███         ███    ███   ███    ███      ███    ███   ███    ███ ███    ███   ███    ███   ███    ███
   ▀███▀▀██ ███▄▄▄███ ███         ███    █▀    ███    ███      ███    █▀    ███    ███ ███    ███   ███    █▀    ███    █▀ 
    ███   ▀ ▀▀▀▀▀▀███ ███        ▄███▄▄▄      ▄███▄▄▄▄██▀      ███         ▄███▄▄▄▄██▀ ███    ███   ███          ███      
    ███     ▄██   ███ ███       ▀▀███▀▀▀     ▀▀███▀▀▀▀▀        ███        ▀▀███▀▀▀▀▀   ███    ███ ▀███████████ ▀███████████
    ███     ███   ███ ███         ███    █▄  ▀███████████      ███    █▄  ▀███████████ ███    ███          ███          ███
    ███     ███   ███ ███▌    ▄   ███    ███   ███    ███      ███    ███   ███    ███ ███    ███    ▄█    ███    ▄█    ███
   ▄████▀    ▀█████▀  █████▄▄██   ██████████   ███    ███      ████████▀    ███    ███  ▀██████▀   ▄████████▀   ▄████████▀ 
                      ▀                        ███    ███                   ███    ███                                    
 """

# Add keyboard navigation JavaScript
nav_script = """
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
"""

css = Style(open('src/static/css/terminal.css').read(), type="text/css", rel="stylesheet")

app = FastHTML(hdrs=(css, Script(nav_script)))

@app.route("/")
def get():
    return (
        Title("home"), 
        Main(
            Pre(ASCII_ART, cls="ascii-art"),
            P("hi, this is tyler <3"),
            P("i'm a machine learning engineer"),
            P("and this is my personal site"),
            P("..."),
            Ul(
                Li(A("github", href="https://github.com/tylermarcuscross")),
                Li(A("substack", href="https://substack.com/@tylercross/notes")),
                Li(A("cv", href="/static/cv.pdf")),
                cls="terminal-links"
            )
        )
    )

serve()