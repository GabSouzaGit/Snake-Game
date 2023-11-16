import isOpen from "./isOpen.js";
import openMenu from "./openMenu.js";
import closeMenu from "./closeMenu.js";

/**
 * @description Alterna entre o estado "aberto" e "fechado" do slide.
 * @returns {void}
 */

function toggleMenu(){
    if(isOpen()){
        closeMenu();
        return;
    }

    openMenu();
}

export default toggleMenu;