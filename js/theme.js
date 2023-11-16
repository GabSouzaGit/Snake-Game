import darkTheme from "./functions/themeFunctions/darkTheme.js"
import whiteTheme from "./functions/themeFunctions/whiteTheme.js";

const toggleTheme = document.querySelector('#toggle-theme');
let dark = false;

toggleTheme.addEventListener('click', () => {
    dark = !dark;
    if(dark){
        darkTheme();
        return;
    }

    whiteTheme();
});


/*
<div id="configs">
        <button id="toggle-theme"> Alterar tema </button>
    </div>
*/