/** 
*   @param {number} max - Valor máximo
*   @param {number} min - Valor mínimo (padrão 0)
*   @returns {number} Valor numérico aleatório
*   @description Retorna um valor aleatorio dentro de um range máximo e mínimo.
*/

function getRandom(max, min = 0){
    return Math.floor(Math.random() * (max + min));
}

export default getRandom;