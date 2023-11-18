import { canvas } from "../constants/DEFAULT_CANVAS.js"

const snake = {
    position: {
        x: Math.floor(canvas.width / 2),
        y: Math.floor(canvas.height / 2)
    },
    structure: []
}

export default snake;