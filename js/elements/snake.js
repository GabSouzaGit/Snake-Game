import { canvas } from "../constants/DEFAULT_CANVAS.js"
import { height, width } from "../constants/DEFAULT_DIMENSIONS.js";

const snake = {
    direction: 'ArrowLeft',
    structure: [
        {
            direction: 'ArrowLeft',
            x: Math.floor(canvas.width / 2),
            y: Math.floor(canvas.height / 2)
        },
        {
            direction: 'ArrowLeft',
            x: Math.floor(canvas.width / 2) - width,
            y: Math.floor(canvas.height / 2)
        }
    ]
}

for(let i = 2; i < 7; i++){
    snake.structure[i] = {
        direction: 'ArrowLeft',
        x: Math.floor(canvas.width / 2) - width * i,
        y: Math.floor(canvas.height / 2)
    }
}

export default snake;