import { canvas, context } from "../../../constants/DEFAULT_CANVAS.js";
import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";
import getRandom from "./getRandom.js";
import food from "../../../elements/food.js";

const positions = [];
for(let x = 0; x < canvas.width - width; x += width){
    positions[x / 20] = x;
}

function createFood(){
    const x = getRandom(0, positions.length - 1);
    const y = getRandom(0, positions.length - 1);

    food.x = positions[x];
    food.y = positions[y];
}

export default createFood;