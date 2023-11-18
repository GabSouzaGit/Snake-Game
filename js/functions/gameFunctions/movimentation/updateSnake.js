import snake from "../../../elements/snake.js";

function updateSnake(x, y, direction){
    snake.structure = [...snake.structure.slice(1), {direction, x, y}];
}

export default updateSnake

