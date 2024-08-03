/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante. */

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

function swap(array, indice1, indice2) {
  // tengo que almacenar el valor de indice 1 en una variable temporal

  let tempVar = fantasticFour[indice1]

  // paso el valor del indice 1 al indice 2

  fantasticFour[indice1] = fantasticFour[indice2]

  // debo meter en la tempVar el valor de indice2

  fantasticFour[indice2] = tempVar

  return fantasticFour
}

console.log(swap(0, 2))
console.log(swap(1, 3))
console.log(swap(2, 1))
