/*
  * Ejercicio 4
  * dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
  * que existan en las dos listas iniciales, además ordene esta última lista de manera que las
  * palabras repet'idas más veces en ambos arreglos se encuentren al inicio de la lista.
  *
  * ejem:
  * ["rat", "dog", "cat", "parrot", "cat"] y ["cat", "lizard", "rat", "cat"] devolverán ["cat", "rat"]
  */

function repetirPalabras(array1:string[], array2:string[]) {
  
  const repetidos = array1.filter(element => array2.includes(element));
  return repetidos;
}

module.exports = repetirPalabras;
