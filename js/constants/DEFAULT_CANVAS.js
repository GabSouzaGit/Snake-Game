const domCanvas = document.querySelector('canvas');
domCanvas.width = domCanvas.offsetWidth;
domCanvas.height = domCanvas.offsetHeight;

const DEFAULT_CANVAS = {
    canvas: domCanvas,
    context: domCanvas.getContext('2d')
}

export const canvas = DEFAULT_CANVAS.canvas;
export const context = DEFAULT_CANVAS.context;