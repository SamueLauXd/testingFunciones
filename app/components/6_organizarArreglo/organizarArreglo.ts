/**
  * Ejercicio 6
  * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
  * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
  * ordenados ascendentemente.
  *
  * ejem:
  * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
  * 
  */

let arrayX: any [] =["b", 3, "e", 4, "a", 6];

function organizarArreglo(array: Array<any>) {

    let arr = array;
    const organizedArray: any[] = [];
    
    array = array.filter(number => Number.isInteger(number));
    arr = arr.filter(string => !Number.isInteger(string));
    
    array.sort();
    arr.sort();
    arr.forEach(element => {
        organizedArray.push(element);
    });
    array.forEach(element => {
        organizedArray.push(element);
    });
    return organizedArray;
}

console.log(organizarArreglo(arrayX))

module.exports = organizarArreglo;