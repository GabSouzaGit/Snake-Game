import slide from "../../constants/DEFAULT_SLIDE.js"

/**
 * @description Retorna o estado de abertura atual do slide.
 * @returns {boolean} Estado atual do slide (aberto ou fechado).
 */

function isOpen(){
    if(slide.classList.contains('open')){
        return true;
    }

    return false;
}

export default isOpen;