const ejercicio10 = require ('./lanzarDados');

test('lanzarDados', ()=>{
    
    const result:Record<string,number> = {};

    expect(ejercicio10(result)).not.toEqual({});
});