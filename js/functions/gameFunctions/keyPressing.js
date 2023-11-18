import listenMoviment from "./movimentation/listenMoviment.js";
import renderSnake from "./movimentation/renderSnake.js";

/**
 * @description Define as funções que serão disparadas em cada seta.
 */

function defineKeyPressing(){
    document.addEventListener('keydown', (event) => {
        try {
            const eventExecution = listenMoviment(event.key);
            eventExecution();
            renderSnake();
        }catch(exception){
            console.log('Foi a lugar nenhum: ', exception);
        }
    });
}

export default defineKeyPressing;