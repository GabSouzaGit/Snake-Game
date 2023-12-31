import page from "../../constants/DEFAULT_PAGE.js"

const dark = {
    background: "hsl(220, 50%, 10%)",
    lines: "hsl(220, 50%, 30%)",
    text: "#ffffff",
    slide: "hsl(220, 50%, 5%)"
}

/**
 * @description Altera o tema atual da página para "escuro".
 */

function darkTheme(){
    page.style.setProperty('--background', dark.background);
    page.style.setProperty('--lines', dark.lines);
    page.style.setProperty('--default-text', dark.text);
    page.style.setProperty('--slide', dark.slide);
};

export default darkTheme;

