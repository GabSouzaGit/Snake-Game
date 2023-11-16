import isOpen from "./isOpen.js";
import openMenu from "./openMenu.js";
import closeMenu from "./closeMenu.js";

function toggleMenu(){
    if(isOpen()){
        closeMenu();
        return;
    }

    openMenu();
}

export default toggleMenu;