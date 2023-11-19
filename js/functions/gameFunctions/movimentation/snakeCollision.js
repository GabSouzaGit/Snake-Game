import { canvas } from "../../../constants/DEFAULT_CANVAS.js";
import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";
import die from "../die.js";

/**
 * @description Avalia e simula a colisão do objeto no canvas.
 * @param {number} x Posição X (horizontal) do objeto.
 * @param {number} y Posição Y (vertical) do objeto.
 * @returns {object} Novas posições (x, y) considerando a colisão do objeto.
 */

function snakeCollision(x, y){
    if(x > canvas.width - width ||
        y > canvas.height - height || 
        x < 0 || 
        y < 0 ){
        die();
    }

    return {posx: x, posy: y}
}

export default snakeCollision;