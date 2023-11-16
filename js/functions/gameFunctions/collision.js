import { canvas } from "../../constants/DEFAULT_CANVAS";
import { width, height } from "../../constants/DEFAULT_DIMENSIONS";

function collision(x, y){
    if(x > canvas.width - width){
        x = canvas.width - width;
    }
    if(y > canvas.height - height){
        y = canvas.height - height;
    }
    if(x < 0){
        x = 0;
    }
    if(y < 0){
        y = 0;
    }

    return {x, y}
}

export default collision;