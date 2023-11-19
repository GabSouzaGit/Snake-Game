import animation from "../../elements/animation.js";
import statistics from "../../elements/statistics.js";
import event from "../../elements/event.js";
import start from "../../constants/START_BUTTON.js";

function die(){
    document.removeEventListener('keydown', event.listener);
    clearInterval(animation.id);
    statistics.deaths += 1;
    statistics.updateStatistics();
    start.disabled = false;
}

export default die;