/**
 * @param {number} x - Posição "x" da figura (horizontal)
 * @param {number} y - Posição "y" da figura (vertical)
 * @param {object} ctx - Contexto do canvas da página
 * @param {object} canvas - Objeto de canvas da página
 * @description Cria um novo quadrado dentro do canvas.
 */

function renderRect(x, y, ctx, canvas){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(x, y, 15, 15);
    ctx.fill()
    ctx.closePath();
}

export default renderRect;