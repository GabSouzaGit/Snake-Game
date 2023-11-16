const permittedDirections = {
    'ArrowUp': () => {
        console.log('Foi para cima');
    },

    'ArrowDown': () => {
        console.log('Foi para baixo');
    },
    
    'ArrowLeft': () => {
        console.log('Foi para a esquerda');
    },

    'ArrowRight': () => {
        console.log('Foi para direita');
    }
}

/**
 * @description Define as funções que serão disparadas em cada seta.
 */

function defineKeyPressing(){
    document.addEventListener('keydown', (event) => {
        try {
            const eventExecution = permittedDirections[event.key];
            eventExecution();
        }catch(exception){
            console.log('Foi a lugar nenhum');
        }
    });
}

export default defineKeyPressing;