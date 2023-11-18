import snake from "../../elements/snake.js";
import defineKeyPressing from "./keyPressing.js";
import renderSnake from "./movimentation/renderSnake.js";

/**
 * @description Inicia a "snake" no centro do canvas.
 */

function spawn(){
    defineKeyPressing();
    renderSnake();
}

export default spawn;
