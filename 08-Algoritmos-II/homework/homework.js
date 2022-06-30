'use strict'

const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.
// estos dos metodos tienen recursividad, y como tales, tienen que tener un caso de corte

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // caso base si tiene 0 elementos o 1 elemento
  if(array.length <= 1) return array;
  // tomo pivot
  var pivot = array[0]; //mi pivot va a ser la primer posicion
  // defino izquierda y derecha, despues debo recorrerlo y si es menor lo guardo en izq y sino en derecha, para recorrerlo utilizo un bucle for
  var izq = [];
  var der = [];
  // debo arrancar a recorrerlo desde el segundo elemento (1), porque el primero (0) ya lo tengo guardado en el pivot
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot){ // si lo que esta en la posicion i, o sea lo que voy recorriendo, es mas chico que el pivot o sea la posicion que tome primero, lo muevo a la izquierda
    izq.push(array[i])
    }else{ // caso contrario, si es mas grande, lo muevo a la derecha
      der.push(array[i])
    }
    
  }
  // recursion
  return quickSort(izq).concat(pivot).concat(quickSort(der)) // concat va pegando los arreglos.

}


function mergee(arr1, arr2){ // esta va  recibir dos arreglos y va a tener dos punteros para ir comparando y ordenando, en una variable va a guardar los mas chicos.
  // defino los dos punteros
  var i = 0;
  var j = 0;
  // defino un arreglo donde va a ir guardando los elementos de forma ordenadas
  var result = [];
  
  while(i < arr1.length && j < arr2.length){ // mientras mis punteros no se pasen del largo del array que tienen que recorrer
  // comparo y pusheo a result
  if (arr1[i] < arr2[j]){
    result.push(arr1[i])  // si el i es menor que j, lo pusheo, siempre va quedandose con el menor, y tambien incremento i para que se mueva de posicion en el array
    i++;
  }else{
    result.push(arr2[j]) // caso contrario, si j es mas chico, lo pusheo a j al result
    j++
  }
  }
  // que me retorne result concatenado al arr1 hasta donde alla quedado la i, y a su vez a eso le concatena el arr2 desde donde se haya quedado la j
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
};

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // caso base
  if(array.length === 1) return array; // si el array tiene largo de 1, lo retorno
  // hay que partir el arreglo a la mitad
  var medio = Math.floor(array.length / 2); // la mitad es el length dividido 2, sin embargo lo redondeamos hacia abajo por si nos dan un arreglo impar.
  // ahora definimos izq y der donde van a ir los valores
  // en la izquierda guardo la primer mitad, desde 0 hasta el medio, y en la derecha el resto, desde el medio hasta el final
  var izq = array.slice(0, medio);
  var der = array.slice(medio);
  // ahora hay que unirlos y a su vez irlos ordenando.
  return mergee(mergeSort(izq), mergeSort(der)); // que retorne la funcion que va ordenando, con la llamada de merge sort por ambos lados, esto va a ir partiendo hasta que algun parametro devuelva un arreglo de 1 posicion y a partir de ahi los va a ordenar
}


/*CORRECION EN CLASE
PROFE CREO UNA FUNCION SOLO PARA DIVIDIR
function dividir(array){
  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var rigth = array.slice(middle);
  return[left, rigth];
}

DESPUES LLAMO DIVDIR DESDE MERGE SORT
function mergeSort(array){
  if(array.length === 1) return array;
  var mitad = dividir(array);
  var left = mitad[0];
  var rigth = mitad[1];
  return mergeSort(left), mergeSort(rigth);  PERO HASTA ACA TODO LO QUE HICIMOS FUE DIVIDIRLO SOLAMENTE
}



*/

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
