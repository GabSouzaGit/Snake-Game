import { canvas } from "../../constants/DEFAULT_CANVAS.js";
import defineKeyPressing from "./keyPressing.js";
import renderRect from "./renderRect.js";
import snake from "../../elements/snake.js";

/**
 * @description Inicia a "snake" no centro do canvas.
 */

function spawn(){
    defineKeyPressing();
    renderRect(snake.position.x, snake.position.x);
}

export default spawn;
