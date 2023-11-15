import { canvas } from "../constants/DEFAULT_CANVAS.js";
import defineKeyPressing from "./keyPressing.js";
import renderRect from "./renderRect.js";

/**
 * @description Inicia a "snake" no centro do canvas.
 */

function spawn(){
    defineKeyPressing();
    renderRect(canvas.width / 2, canvas.height / 2);
}

export default spawn;