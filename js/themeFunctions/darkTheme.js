import page from "../constants/DEFAULT_PAGE.js"

const dark = {
    background: "hsl(220, 50%, 10%)",
    lines: "#ffffff",
    text: "#ffffff"
}

function darkTheme(){
    page.style.setProperty('--background', dark.background);
    page.style.setProperty('--lines', dark.lines);
    page.style.setProperty('--default-text', dark.lines);
};

export default darkTheme;

