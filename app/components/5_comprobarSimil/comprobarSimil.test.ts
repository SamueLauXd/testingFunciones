const ejercicio5 = require ("./comprobarSimil");

test("verificacion", () =>{

let  Array1: string [] = ["control", "ayuda", "telefono", "amor"];
let  Array2: string [] = ["ayuda", "amor", "control", "telefono"];

expect(ejercicio5(Array1, Array2)).toContain("Son iguales!");

})