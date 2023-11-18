import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";
import animation from "../../../elements/animation.js";
import snake from "../../../elements/snake.js";
import listenMoviment from "./listenMoviment.js";
import renderSnake from "./renderSnake.js";
import snakeCollision from "./snakeCollision.js";
import updateSnake from "./updateSnake.js";


function moveSnake(x, y, direction){
    return () => {
        const { posx, posy } = snakeCollision(x, y);
        updateSnake(posx, posy, direction);
        renderSnake();
        console.log('Chamando função: ', direction);
        listenMoviment(animation.direction);
    }
}

export default moveSnake;