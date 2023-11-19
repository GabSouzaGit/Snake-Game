import { canvas, context } from "../../../constants/DEFAULT_CANVAS.js";
import food from "../../../elements/food.js";
import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";

function renderFood(){
    context.beginPath();
    context.rect(food.x, food.y, width, height);
    context.fillStyle = '#ff0000';
    context.fill();
    context.closePath();
    console.log('Posição da comida: ', food)
}

export default renderFood;