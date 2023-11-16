import slide from "../../constants/DEFAULT_SLIDE.js";

function closeMenu(){
    slide.classList.remove('open');
    slide.classList.add('close');
}

export default closeMenu;