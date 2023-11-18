import { width, height } from "../../constants/DEFAULT_DIMENSIONS.js";
import snake from "../../elements/snake.js";
import collision from "./collision.js";

/**
 * @description Retorna uma função que move o objeto "snake" pelo canvas de acordo com a tecla do teclado.
 * @param {string} key Chave da tecla digitada no teclado. 
 * @returns {function} Função relacionada a chave do teclado.
 */

function log(){
    console.log(snake.structure[0])
}

function moveSnake(key){
    const permittedDirections = {
        'ArrowUp': () => {
            const { x, y } = snake.structure[0]
            const { posx, posy } = collision(x, y - height);
            snake.structure[0] = { x: posx, y: posy }
            log();
        },
    
        'ArrowDown': () => {
            const { x, y } = snake.structure[0]
            const { posx, posy } = collision(x, y + height);
            snake.structure[0] = { x: posx, y: posy }    
            log();
        },
        
        'ArrowLeft': () => {
            const { x, y } = snake.structure[0]
            const { posx, posy } = collision(x - width, y);
            snake.structure[0] = { x: posx, y: posy }    
            log();
            
        },

        'ArrowRight': () => {
            const { x, y } = snake.structure[0]
            const { posx, posy } = collision(x + width, y);
            snake.structure[0] = { x: posx, y: posy }    
            log();
        }
    }    

    return permittedDirections[key];
}

export default moveSnake;