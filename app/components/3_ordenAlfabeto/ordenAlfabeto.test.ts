const ejercicio3 = require ("./ordenAlfabeto");

test ("ordenAlfabetico", ()=>{

let  array1 = ["e", "d", "f"];
let  array2 = ["a", "c", "b"];
let  array3 = ["m", "o", "n"];

let orden = array1.concat(array2,array3);

        expect(ejercicio3(orden)).toEqual(orden);

})