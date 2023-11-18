import snake from "../../../elements/snake.js";

function updateSnake(x, y){
    snake.structure = [...snake.structure.slice(1), {x, y}];
}

export default updateSnake

