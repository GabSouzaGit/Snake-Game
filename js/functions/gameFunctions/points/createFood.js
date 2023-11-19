import { canvas, context } from "../../../constants/DEFAULT_CANVAS.js";
import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";
import getRandom from "./getRandom.js";
import food from "../../../elements/food.js";

function createFood(){
    const x = getRandom(0, canvas.width - width);
    const y = getRandom(0, canvas.height - height);

    food.x = x;
    food.y = y
}

export default createFood;