import snake from "../../../elements/snake.js";

/**
 * @description Atualiza a matriz da snake, trocando a posição das coordenadas e direções.
 * @param {number} x Nova posição X (horizontal) do objeto.
 * @param {number} y Nova posição Y (vertical) do objeto.
 * @param {string} direction Nova direção na qual o objeto será movido.
 */

function updateSnake(x, y, direction){
    snake.structure = [...snake.structure.slice(1), {direction, x, y}];
    console.log({ last: snake.structure[0].direction, guide: snake.structure[1].direction })
}

export default updateSnake

