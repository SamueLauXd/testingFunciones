/**
 * Ejercicio 9
 * Calcular el factorial de un número
 */


function numeroFactorial( n:number) {

    let total = 1;
    for (let a = 1; a < n; a++) {
        total = total * a;
    }
    return total;
 }
console.log(numeroFactorial(4));

module.exports= numeroFactorial;





