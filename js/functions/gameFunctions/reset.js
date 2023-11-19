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
            direction: '10',
            x: 200,
            y: 200
        },
        {
            direction: '10',
            x: 200 - width,
            y: 200
        }
    ]
    defineKeyPressing();
    createFood();
    renderSnake();
}

export default reset;
