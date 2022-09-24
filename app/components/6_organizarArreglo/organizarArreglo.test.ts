const ejercicio6 = require ("./organizarArreglo");

test("organizarArreglo", () =>{

    let arrayX: any [] =["b", 3, "e", 4, "a", 6];
    let result: any [] = ["a", "b", "e", 3, 4, 6];

    expect(ejercicio6(arrayX)).not.toBe(result);

})