const ejercicio2 = require ('./separarNumeros');

test("separarNumeros", () =>{
    
let numberArray: number [] = [];
    numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result: any[] = [[6,8], [5,7]];

    expect(ejercicio2(numberArray)).not.toEqual(result);
})