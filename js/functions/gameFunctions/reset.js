import snake from "../../elements/snake.js";
import defineKeyPressing from "./defineKeyPressing.js";
import renderSnake from "./movimentation/renderSnake.js";
import { canvas } from "../../constants/DEFAULT_CANVAS.js";
import { width } from "../../constants/DEFAULT_DIMENSIONS.js";
import createFood from "./points/createFood.js";

/**
 * @description Inicia a "snake" no centro do canvas.
 */

function reset(){
    snake.structure = [
        {
            direction: 'ArrowLeft',
            x: Math.floor(canvas.width / 2),
            y: Math.floor(canvas.height / 2)
        },
        {
            direction: 'ArrowLeft',
            x: Math.floor(canvas.width / 2) - width,
            y: Math.floor(canvas.height / 2)
        }
    ]
    defineKeyPressing();
    createFood();
    renderSnake();
}

export default reset;
