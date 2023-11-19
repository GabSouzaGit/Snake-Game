import snake from "../../../elements/snake.js";
import { context, canvas } from "../../../constants/DEFAULT_CANVAS.js";
import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";
import renderFood from "../points/renderFood.js";

function renderSnake(color = "hsl(80, 100%, 40%)"){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    snake.structure.map((part, i)=> {
        context.rect(part.x, part.y, width, height);
        context.fillStyle = color;
    });
    context.closePath();
    context.fill();
    renderFood();
}

export default renderSnake;