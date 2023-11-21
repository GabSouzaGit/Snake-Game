import listenMoviment from "./movimentation/listenMoviment.js";
import event from "../../elements/event.js";
/**
 * @description Define as funções que serão disparadas em cada seta.
 */

function defineKeyPressing(){
    function keyPressing(event){
        try {
            const eventExecution = listenMoviment(event.key);
            eventExecution();
        }catch(exception){
            console.log('Foi a lugar nenhum: ', exception);
        }
    }

    document.addEventListener('keyup', keyPressing);
    event.listener = keyPressing;
}

export default defineKeyPressing;