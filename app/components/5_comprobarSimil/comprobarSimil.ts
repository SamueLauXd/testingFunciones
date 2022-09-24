
/**
  * Ejercicio 5
  * cree una función que reciba dos arreglos y verifique 
  * que el primero contenga todos los elementos del segundo
  */

let  Array1: string [] = ["control", "ayuda", "telefono", "amor"];
let  Array2: string [] = ["ayuda", "amor", "control", "telefono"];

function comprobarSimil(array1:Array<string>, array2:Array<string>){
    array1.sort()
    array2.sort()
    if(array1.length==array2.length && array1.every(function(v,i) { return v === array2[i] })){
        return "Son iguales!";
    }else{
        return "No son iguales"
    }
}

console.log(comprobarSimil(Array1,Array2));

module.exports = comprobarSimil;