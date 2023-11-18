import { width, height } from "../../constants/DEFAULT_DIMENSIONS.js";
import snake from "../../elements/snake.js";
import collision from "./collision.js";
import renderRect from "./renderRect.js";

/**
 * @description Retorna uma função que move o objeto "snake" pelo canvas de acordo com a tecla do teclado.
 * @param {string} key Chave da tecla digitada no teclado. 
 * @returns {function} Função relacionada a chave do teclado.
 */

function moveSnake(key){
    const permittedDirections = {
        'ArrowUp': () => {
            const { x, y } = snake.position;
            const { posy } = collision(x, y - height);
            snake.position.y = posy;
            renderRect(snake.position.x, snake.position.y)
        },
    
        'ArrowDown': () => {
            const { x, y } = snake.position;
            const { posy } = collision(x, y + height);
            snake.position.y = posy;
            renderRect(snake.position.x, snake.position.y)
        },
        
        'ArrowLeft': () => {
            const { x, y } = snake.position;
            const { posx } = collision(x - width, y);
            snake.position.x = posx;
            renderRect(snake.position.x, snake.position.y)
            
        },

        'ArrowRight': () => {
            const { x, y } = snake.position;
            const { posx } = collision(x + width, y);
            snake.position.x = posx;
            renderRect(snake.position.x, snake.position.y)
        }
    }    

    return permittedDirections[key];
}

export default moveSnake;