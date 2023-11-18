import listenMoviment from "./movimentation/listenMoviment.js";

/**
 * @description Define as funções que serão disparadas em cada seta.
 */

function defineKeyPressing(){
    document.addEventListener('keydown', (event) => {
        try {
            const eventExecution = listenMoviment(event.key);
            eventExecution();
        }catch(exception){
            console.log('Foi a lugar nenhum: ', exception);
        }
    });
}

export default defineKeyPressing;