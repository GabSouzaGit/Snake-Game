import { context } from "../../../constants/DEFAULT_CANVAS.js";
import food from "../../../elements/food.js";
import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";
import foodCollision from "./foodCollision.js";
import growSnake from "./growSnake.js";
import createFood from "./createFood.js";
import statistics from "../../../elements/statistics.js";

function renderFood(){
    if(foodCollision()){
        growSnake();
        createFood();
        statistics.points++;
        statistics.updateStatistics();
    }

    context.beginPath();
    context.rect(food.x, food.y, width, height);
    context.fillStyle = '#ff0000';
    context.fill();
    context.closePath();
}

export default renderFood;