'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr = [1];

  var divisor = 2;
  // empezamos viendo si el numero es divisible por el divisor, y si lo es, pushearlo a mi array. vamos a dividir el número hasta que sea 1.
  // numero es distinto de 1? 
  while (num !== 1) {
    // numero modulo 2 es igual a 0? si, entonces pusheamos divisor al array
    if (num % divisor === 0) {
      arr.push(divisor);
      // ahora mi numero va a ser igual a numero dividido por mi variable divisor
      num = num / divisor;
    }else{
      // si el modulo no da 0, le sumamos al divisor uno, y de nuevo.
      divisor++;
    }
  }
  return arr
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // va comparando de a 2 valores (i con i+1)
  // si el que esta en la posicion i es mas grande que el de adelante
  // los intercambia
  // (deberia guadarme en una var aux lo que esta en i antes de pisarlo)
  // **optimizacion**
  //si detecta que dio una vuelta y no hizo cambios, corta.
   
  var flag = true; // optimizacion
  
  while (flag){
    flag = false;
    for (let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]){ // si el numero que sigue es menor que en el que estoy parado, lo debo reemplzar
        var aux = array[i] // me guardo el numero en el que estoy
        array[i] = array[i + 1] // una vez que guarde lo que tenia en i, pongo el numero siguiente o sea el i + 1, en donde estaba i.
        array[i + 1] = aux;// ahora asigno el numero que me habia guardado en el auxiliar a i + 1, entonces queda hecho el intercambio, i + 1 paso a ser i, e i paso a ser i + 1
        flag = true; // flag pasa a ser true, porque hubo cambios, en el momento en que ya no haya cambios o sea que i no sea mayor que i + 1, no se van a producir cambios, por lo que flag va a ser false, y se va a quedar false, entonces va a salir del while.

      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // tengo que ir "sacando" los valores de mi array y comparando con los de atras
  // lo suelto O cuando llegue a la posicion cero
  // O adelante de un valor mas chico

  for (var i = 1;  i < array.length; i++){
    var j = i- 1;
    var aux = array[i];
    while (j >= 0 && array[j] > aux){
      array[j + 1] = array [j];
      j-- // para que siga comparando hacia atras y se siga moviendo
    }
    // ahora debo insertar la variable aux en la posicion que corresponde.
    array[j+1] = aux
  }
return array;
};


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // tengo que ir buscando el valor mas chico de mi array
  // para ubicarlo adelante de todo

  for (var i = 0; i < array.length - 1; i++) { // i deberia llegar hasta el length -1 para que j no se escape de rango
    var minimo = i;
    for (var j = i + 1; j < array.length; j++) { // j es igual a i + 1 porque tiene que ir comparando por delante de i, y en su caso llega hasta el final del length.
      if (array[j] < array[minimo]){ // si en algun momento lo que hay en j es mas chico que lo que hay en minimo
        minimo = j; // minimo va a pasar a ser j
        }
      }
      var aux = array[i];
      array[i] = array[minimo];
      array[minimo] = aux
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
