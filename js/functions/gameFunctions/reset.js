import snake from "../../elements/snake.js";
import defineKeyPressing from "./defineKeyPressing.js";
import renderSnake from "./movimentation/renderSnake.js";
import { canvas } from "../../constants/DEFAULT_CANVAS.js";

/**
 * @description Inicia a "snake" no centro do canvas.
 */

function reset(){
    snake.structure = [{
        direction: 'ArrowLeft',
        x: Math.floor(canvas.width / 2),
        y: Math.floor(canvas.height / 2)
    }]

    defineKeyPressing();
    renderSnake();
}

export default reset;
