/**
 * @description Inicia o jogo.
 */
function run(){
    function recursiveRunning(){

        requestAnimationFrame(recursiveRunning)
    }

    return requestAnimationFrame(recursiveRunning)
}

export default run;