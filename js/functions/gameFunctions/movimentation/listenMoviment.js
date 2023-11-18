import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";
import snake from "../../../elements/snake.js";
import moveSnake from "./moveSnake.js";
import snakeCollision from "./snakeCollision.js";
import updateSnake from "./updateSnake.js";

/**
 * @description Retorna uma função que move o objeto "snake" pelo canvas de acordo com a tecla do teclado.
 * @param {string} key Chave da tecla digitada no teclado. 
 * @returns {function} Função relacionada a chave do teclado.
 */

function log(){
    //console.log(snake.structure)
}

function listenMoviment(key){
    const { x, y } = snake.structure[snake.structure.length - 1];

    const permittedDirections = {
        'ArrowUp': () => {
            const up = moveSnake(x, y - height, key);
            up();
            log();
        },
    
        'ArrowDown': () => {
            const down = moveSnake(x, y + height, key);
            down();
            log();
        },
        
        'ArrowLeft': () => {
            const left = moveSnake(x - width, y, key);
            left();
            log();
        },

        'ArrowRight': () => {
            const right = moveSnake(x + width, y, key);
            right();
            log();
        }
    }    

    return permittedDirections[key];
}

export default listenMoviment;