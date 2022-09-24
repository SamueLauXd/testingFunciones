/**
  * Ejercicio 3
  * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
  * ordene su contenido en orden alfabetico.
  *  * las letras de cada grupo están en orden aleatorio.
  *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
  *
  * Ejem:
  * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
  * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
  */

let  array1 = ["e", "d", "f"];
let  array2 = ["a", "c", "b"];
let  array3 = ["m", "o", "n"];

let orden = array1.concat(array2,array3);

function ordenAlfabetico(array:Array<string>){
    let organizedArray = [];
    array.sort();

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        organizedArray.push(element);
    }
    return organizedArray;
}
console.log(ordenAlfabetico(orden));

module.exports = ordenAlfabetico;
