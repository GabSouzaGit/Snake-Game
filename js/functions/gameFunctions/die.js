import animation from "../../elements/animation.js";
import statistics from "../../elements/statistics.js";
import event from "../../elements/event.js";
import { canvas, context } from "../../constants/DEFAULT_CANVAS.js";
import start from "../../constants/START_BUTTON.js";

function die(){
    document.removeEventListener('keydown', event.listener);
    clearInterval(animation.id);
    statistics.deaths += 1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    start.disabled = false;
    console.log('Morreu x_x');
}

export default die;