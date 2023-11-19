import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";
import snake from "../../../elements/snake.js";
import moveSnake from "./moveSnake.js";
import animation from "../../../elements/animation.js";
import time from "../../../constants/TIME.js";

/**
 * @description Retorna uma função que move o objeto "snake" pelo canvas de acordo com a tecla do teclado.
 * @param {string} key Chave da tecla digitada no teclado. 
 * @returns {function} Função relacionada a chave do teclado.
 */

function listenMoviment(key){
    clearInterval(animation.id);
    const permittedDirections = {
        'ArrowUp': () => {
            animation.id = setInterval(() => {
                const { x, y } = snake.structure[snake.structure.length - 1];
                const up = moveSnake(x, y - height, '10');
                up();
            }, time);
        },
    
        'ArrowDown': () => {
            animation.id = setInterval(() => {  
                const { x, y } = snake.structure[snake.structure.length - 1];
                const down = moveSnake(x, y + height, '11');
                down();
            }, time);
        },
        
        'ArrowLeft': () => {
            animation.id = setInterval(() => { 
                const { x, y } = snake.structure[snake.structure.length - 1];
                const left = moveSnake(x - width, y, '00');
                left();
            }, time);
        },

        'ArrowRight': () => {
            animation.id = setInterval(() => {
                const { x, y } = snake.structure[snake.structure.length - 1];
                const right = moveSnake(x + width, y, '01');
                right();    
            }, time);
        }
    }    

    return permittedDirections[key];
}

export default listenMoviment;