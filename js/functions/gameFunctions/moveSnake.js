import { width, height } from "../../constants/DEFAULT_DIMENSIONS.js";
import snake from "../../elements/snake.js";
import collision from "./collision.js";
import renderRect from "./renderRect.js";

function moveSnake(key){
    // Em desenvolvimento
    const permittedDirections = {
        collideAndRender(x, y){
            collision(x, y);
            renderRect(x, y);
        },

        'ArrowUp': () => {
            snake.position.y -= height;
            //Verificar se isso v funcionar v
            this.collideAndRender(snake.position.x, snake.position.y);
        },
    
        'ArrowDown': () => {
            snake.position.y += height;
            this.collideAndRender(snake.position.x, snake.position.y);
        },
        
        'ArrowLeft': () => {
            snake.position.x -= width;
            this.collideAndRender(snake.position.x, snake.position.y);
        },
    
        'ArrowRight': () => {
            snake.position.x += width;
            this.collideAndRender(snake.position.x, snake.position.y);
        }
    }    

    return permittedDirections[key]
}

export default moveSnake;