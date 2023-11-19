import animation from '../../elements/animation.js';
import moveSnake from './movimentation/moveSnake.js';
import snake from '../../elements/snake.js';
import { height } from '../../constants/DEFAULT_DIMENSIONS.js';

/**
 * @description Inicia o jogo.
 */
function run(){
    animation.id = setInterval(() => {
        const { x, y } = snake.structure[snake.structure.length - 1];
        const up = moveSnake(x, y - height, "ArrowUp");
        up();
    }, 1000)
}

export default run;