import reset from "./functions/gameFunctions/reset.js";
import run from './functions/gameFunctions/run.js';
import start from "./constants/START_BUTTON.js";

// Inicia a posição

start.addEventListener('click', (event) => {
    reset();
    run();
    event.target.disabled = true;
});

