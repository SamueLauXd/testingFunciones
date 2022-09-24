/* Ejercicio 2
* Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interir,
* la primera contendrá los números pares del arreglo y la segunda los impares
*/


let numberArray: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function separarNumeros(array: Array <number>){
    let pairArray: Array<number> = [];
    let unpairArray: Array<number>  = [];

    array.forEach(element => {
        
        if(element%2 == 0){
            pairArray.push(element);
        } else {
            unpairArray.push(element);
        }
    });
    console.log(pairArray, unpairArray,);
}

console.log(separarNumeros(numberArray));

module.exports = separarNumeros;