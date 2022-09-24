const ejercicio1 = require ("./unirArreglo");

test("unirArreglo", () =>{
    
    let wordArray: string [] = ["s", "a", "m"];
    let numArray: number [] = [1,2,3];
    
    let mergedArray = ["s",1,"a",2,"m",3];


    expect(ejercicio1(wordArray, numArray)).toEqual(mergedArray);

})