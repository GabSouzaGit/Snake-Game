import slide from "../../constants/DEFAULT_SLIDE.js"

/**
 * @description Abre o menu slide da página.
 */

function openMenu(){
    slide.classList.remove('close');
    slide.classList.add('open');
}

export default openMenu;