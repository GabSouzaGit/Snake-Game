/**
 * @param {number} x - Posição "x" da figura (horizontal)
 * @param {number} y - Posição "y" da figura (vertical)
 * @param {object} ctx - Contexto do canvas da página
 * @description Cria um novo quadrado dentro do canvas.
 */

function createRect(x, y, ctx){
    ctx.beginPath();
    ctx.rect(x, y, 15, 15);
    ctx.fill()
    ctx.closePath();
}

export default createRect;