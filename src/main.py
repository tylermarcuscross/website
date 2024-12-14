from fasthtml.common import Style, FastHTML, Title, Main, H1, P
from pathlib import Path

# Get the path to the CSS file
css_path = Path(__file__).parent / "static" / "css" / "terminal.css"

# Read the CSS file
with open(css_path) as f:
    terminal_style = Style(f.read())

app = FastHTML(hdrs=(terminal_style,))

@app.route("/")
def get():
    return (
        Title("Terminal"), 
        Main(
            H1("Hello, my name is Tyler"),
            P("I'm a software engineer"),
            P("and this is my personal site"),
            P("..."),
            cls="container"
        )
    )