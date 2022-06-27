"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía); (pararse en el nodulo anterior al ultimo)
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value);
  var current = this.head;
  // mientras this.head sea null, le decimos que this.head sea este nodo, caso de que la lista este vacia
  if (current === null) {
    this.head = node;
    this._length++;
    return node;
  }
  // mientras el valor de current en el proximo next exista, vamos a hacer que current sea el proximo current, y asi vamos iterando.
  while (current.next) {
    current = current.next;
  }
  // cuando ya no suceda lo de arriba, current.next va a ser el nodo que estamos agregando
  current.next = node;
  this._length++;
  return node;
};

LinkedList.prototype.remove = function() {
  var current = this.head
  if (current === null) return null;
  // si tiene un solo valor
  if (!current.next){
    this.head = null;
    return current.value;
  }
  // si tiene mas de un valor
  while (current.next.next){
      current = current.next
  };
  // guardo el valor que voy a borrar y tengo que devolver
  var aux = current.next;
  // borro el valor
  current.next = null
  // devuelvo el valor que borre
  return aux.value;
};

LinkedList.prototype.search = function(cb){
  var current = this.head;
  // si esta vacia 
  if (!current) return null;
  // si no esta vacia
  while (current) {
    // si recibo una funcion
    if (typeof cb === "function"){
      //ejecutar la funcion con el valor del nodo
      //si me da true es el valor que buscaba
      if (cb(current.value)){
        return current.value;
      }
    }
    if (current.value === cb) return current.value;
    current = current.next;
  }
  return null
};


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35) (35%). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (value){
  var resultado = 0;
  for (let i = 0; i < value.length; i++) {
    // va a recorrer cada una de las letras y las va a ir sumando a resultado
    resultado = resultado + value.charCodeAt(i);
  }
  // en este caso al devolverlo nunca se va a pasar de los 35 buckets
  return resultado % this.numBuckets;
};

HashTable.prototype.set = function (key, value){ // este metodo guarda el valor dentro de la hashtable
  if (typeof key !== "string") throw new TypeError ("Keys must be string") // arroja error con el mensaje que espera el test
  var index = this.hash(key); // esto devuelve un numero
  if (!this.buckets[index]){ // si no hay nada en esta posicion
    this.buckets[index] = {} // ahora va a ser un objeto
  }
  this.buckets[index][key] = value; // en la key de ese objeto guarda value
};

HashTable.prototype.get = function (key){
  var index = this.hash(key); // esto te devuelve la posicion/indice del arreglo donde esta la key
  return this.buckets[index][key]; // devuelve el bucket en el que esta en el index en esa key
};

HashTable.prototype.hasKey = function (key){
  var index = this.hash(key);
  return this.buckets[index].hasOwnProperty(key); // si el objeto tiene la propiedad/key por la que pregunta la funcion devuele true, sino devuelve false
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
