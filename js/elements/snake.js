import { canvas } from "../constants/DEFAULT_CANVAS.js"
import { width } from "../constants/DEFAULT_DIMENSIONS.js";

const snake = {
    structure: [
        {
            direction: '00',
            x: Math.floor(canvas.width / 2),
            y: Math.floor(canvas.height / 2)
        },
        {
            direction: '00',
            x: Math.floor(canvas.width / 2) - width,
            y: Math.floor(canvas.height / 2)
        }
    ]
}

export default snake;