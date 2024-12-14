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

css = Style(open('src/static/css/terminal.css').read(), type="text/css", rel="stylesheet")

app = FastHTML(hdrs=(css))

@app.route("/")

def get():
    return (
        Title("Home"), 
        Main(
            Pre(ASCII_ART, cls="ascii-art"),  # ASCII art wrapped in Pre tag
            H1("Hello, my name is Tyler"),
            P("I'm a machine learning engineer"),
            P("and this is my personal site"),
            P("..."),
            cls="container"
        )
    )

serve()