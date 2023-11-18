import spawn from "./functions/gameFunctions/spawn.js";
import run from './functions/gameFunctions/run.js';
import framesID from "./elements/animation.js";

const start = document.querySelector('#start');
// Inicia a posição
spawn();

start.addEventListener('click', (event) => {
    framesID = run();
    event.target.disabled = true;
});