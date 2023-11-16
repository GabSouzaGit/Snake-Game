import page from "../constants/DEFAULT_PAGE.js"

const dark = {
    background: "hsl(220, 50%, 10%)",
    lines: "#ffffff",
    text: "#ffffff"
}

const white = {
    background: "#ffffff",
    lines: "#000000",
    text: "#000000"
}

export function darkTheme(){
    page.style.setProperty('--background', dark.background);
    page.style.setProperty('--lines', dark.lines);
    page.style.setProperty('--default-text', dark.lines);
};

export function whiteTheme(){
    page.style.setProperty('--background', white.background);
    page.style.setProperty('--lines', white.lines);
    page.style.setProperty('--default-text', white.lines);
}