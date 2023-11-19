import snake from "../../../elements/snake.js"
import directions from "../../../constants/SNAKE_DIRECTIONS.js";

function invertDirection(direction){
    direction = direction.split("");
    const invert = !Number(direction[1]);
    return `${direction[0]}${Number(invert)}`;
}

function growSnake(){
    const last = snake.structure[0];
    const inverted = invertDirection(last.direction);

    let [axios, direction] = inverted;
    axios = Number(axios);
    direction = Number(direction);

    snake.structure.unshift(directions[axios][direction].grow())
}

export default growSnake;