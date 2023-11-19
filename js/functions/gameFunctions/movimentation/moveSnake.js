import renderSnake from "./renderSnake.js";
import snakeCollision from "./snakeCollision.js";
import updateSnake from "./updateSnake.js";

function moveSnake(x, y, direction){
    return () => {
        const { posx, posy } = snakeCollision(x, y);
        updateSnake(posx, posy, direction);
        renderSnake();
    }
}

export default moveSnake;