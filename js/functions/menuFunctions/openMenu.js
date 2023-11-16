import slide from "../../constants/DEFAULT_SLIDE.js"

function openMenu(){
    slide.classList.remove('close');
    slide.classList.add('open');
}

export default openMenu;