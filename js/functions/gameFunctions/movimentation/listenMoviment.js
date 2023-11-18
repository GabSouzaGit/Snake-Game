import { width, height } from "../../../constants/DEFAULT_DIMENSIONS.js";
import snake from "../../../elements/snake.js";
import snakeCollision from "./snakeCollision.js";
import renderSnake from "./renderSnake.js";
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
    const permittedDirections = {
        'ArrowUp': () => {
            const { x, y } = snake.structure[snake.structure.length - 1]
            const { posx, posy } = snakeCollision(x, y - height);
            updateSnake(posx, posy);
            log();
        },
    
        'ArrowDown': () => {
            const { x, y } = snake.structure[snake.structure.length - 1]
            const { posx, posy } = snakeCollision(x, y + height);
            updateSnake(posx, posy);
            log();
        },
        
        'ArrowLeft': () => {
            const { x, y } = snake.structure[snake.structure.length - 1]
            const { posx, posy } = snakeCollision(x - width, y);
            updateSnake(posx, posy);
            log();
            
        },

        'ArrowRight': () => {
            const { x, y } = snake.structure[snake.structure.length - 1]
            const { posx, posy } = snakeCollision(x + width, y);
            updateSnake(posx, posy);
            log();
        }
    }    

    return permittedDirections[key];
}

export default listenMoviment;