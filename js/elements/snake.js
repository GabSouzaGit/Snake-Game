import { canvas } from "../constants/DEFAULT_CANVAS.js"

const snake = {
    structure: [1],
    position: {
        x: Math.floor(canvas.width / 2),
        y: Math.floor(canvas.height / 2)
    }
}

export default snake;