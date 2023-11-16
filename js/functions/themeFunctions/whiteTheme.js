import page from "../../constants/DEFAULT_PAGE.js"

const white = {
    background: "#ffffff",
    lines: "#000000",
    text: "#000000",
    slide: "hsl(0, 0%, 95%)"
}

function whiteTheme(){
    page.style.setProperty('--background', white.background);
    page.style.setProperty('--lines', white.lines);
    page.style.setProperty('--default-text', white.lines);
    page.style.setProperty('--slide', white.slide);
}


export default whiteTheme;