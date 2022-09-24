const ejercicio8 = require ('./arregloIdeas');

test('arregloIdeas', () =>{

    const ideas: string[] = ['Buena', 'Regular', 'Normal'];
    expect(ejercicio8(ideas)).toBe('Publicar, fantastico');
});