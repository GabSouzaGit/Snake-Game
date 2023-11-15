import { canvas, context } from "../constants/DEFAULT_CANVAS.js";
import { width, height } from "../constants/DEFAULT_DIMENSIONS.js";

/**
 * @param {number} x - Posição "x" da figura (horizontal).
 * @param {number} y - Posição "y" da figura (vertical).
 * @description Cria um novo quadrado dentro do canvas.
 */

function renderRect(x, y){
   context.clearRect(0, 0, canvas.width, canvas.height);
   context.beginPath();
   context.rect(x, y, width, height);
   context.fill()
   context.closePath();
}

export default renderRect;