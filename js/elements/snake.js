import { canvas } from "../constants/DEFAULT_CANVAS.js"
import { height, width } from "../constants/DEFAULT_DIMENSIONS.js";

const snake = {
    direction: 'ArrowLeft',
    structure: [
        {
            x: Math.floor(canvas.width / 2),
            y: Math.floor(canvas.height / 2)
        },
        {
            x: Math.floor(canvas.width / 2) - width,
            y: Math.floor(canvas.height / 2)
        },
        {
            x: Math.floor(canvas.width / 2) - width * 2,
            y: Math.floor(canvas.height / 2)
        }
    ]
}

export default snake;