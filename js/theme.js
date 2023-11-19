import darkTheme from "./functions/themeFunctions/darkTheme.js"
import whiteTheme from "./functions/themeFunctions/whiteTheme.js";

const toggleTheme = document.querySelector('#toggle-theme');
let dark = 0;

toggleTheme.addEventListener('click', () => {
    dark = !dark;
    if(dark){
        darkTheme();
        return;
    }

    whiteTheme();
});