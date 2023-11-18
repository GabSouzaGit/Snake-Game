import defineKeyPressing from "./keyPressing.js";
import snake from "../../elements/snake.js";

/**
 * @description Inicia a "snake" no centro do canvas.
 */

function spawn(){
    defineKeyPressing();
    snake.structure.map(part => {
        // Deixa pra depois
    })
}

export default spawn;
