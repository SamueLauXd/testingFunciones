const ejercicio4 = require ('./repetirPalabras');

test('RW', ()=>{

    const arrayW1: string[] = ['apple', 'samsung', 'xiaomi'];
    const arrayW2: string[] = ['huawei', 'apple', 'xiaomi', 'apple'];
    
    const list: string[] = ['apple', 'xiaomi'];


    expect(ejercicio4(arrayW1, arrayW2)).toEqual(list);
});