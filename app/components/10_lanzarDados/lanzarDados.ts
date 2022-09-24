/**
  * Ejercicio 10
  * cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
  * obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
  * resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
  * ejemplo del resultado:
  * const result = { "7": 3, "2": 1 }
  */

function lanzarDados(result: Record<string, number>){

    let dadoA = Math.floor(Math.random()*6);
    let dadoB = Math.floor(Math.random()*6);

    for(let i = 1; i <12; i++){
      if(dadoA+dadoB == i){
        result[i] =+ 1;

      }
    }
    return result
    
}

module.exports = lanzarDados;