import spawn from "./functions/gameFunctions/spawn.js";
import run from './functions/gameFunctions/run.js';

const start = document.querySelector('#start');
// Inicia a posição
spawn();

start.addEventListener('click', (event) => {
    run();
    event.target.disabled = true;
});

