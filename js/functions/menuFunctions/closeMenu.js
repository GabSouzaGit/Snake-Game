import slide from "../../constants/DEFAULT_SLIDE.js";

/**
 * @description Fecha o menu slide da página.
 */

function closeMenu(){
    slide.classList.remove('open');
    slide.classList.add('close');
}

export default closeMenu;