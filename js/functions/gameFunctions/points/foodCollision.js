import snake from "../../../elements/snake.js";
import food from "../../../elements/food.js";
import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";

function foodCollision(){
    const snakeHead = snake.structure[snake.structure.length - 1];
    const leftCollision = food.x < snakeHead.x + width;
    const rightCollision = food.x + width > snakeHead.x;
    const upCollision = food.y < snakeHead.y + height;
    const downCollision = food.y + height > snakeHead.y;

    return leftCollision && rightCollision && upCollision && downCollision;
}

export default foodCollision;