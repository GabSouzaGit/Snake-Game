import slide from "../../constants/DEFAULT_SLIDE.js"

function isOpen(){
    if(slide.classList.contains('open')){
        return true;
    }

    return false;
}

export default isOpen;