import { canvas } from "../../constants/DEFAULT_CANVAS.js";
import { width, height } from "../../constants/DEFAULT_DIMENSIONS.js";

/**
 * @description Avalia e simula a colisão do objeto no canvas.
 * @param {number} x Posição X (horizontal) do objeto.
 * @param {number} y Posição Y (vertical) do objeto.
 * @returns {object} Novas posições (x, y) considerando a colisão do objeto.
 */

function collision(x, y){
    if(x > canvas.width - width){
        x = canvas.width - width;
    }
    if(y > canvas.height - height){
        y = canvas.height - height;
    }
    if(x < 0){
        x = 0;
    }
    if(y < 0){
        y = 0;
    }

    return {posx: x, posy: y}
}

export default collision;