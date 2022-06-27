"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function(){
  // Caso base (nodo hoja)
  if (!this.left && !this.right){ return 1};
  // Casos con un solo hijo
  if (!this.left) return 1 + this.right.size();
  if (!this.right) return 1 + this.left.size();
  // nodo que tiene ambos hijos
  return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.insert = function(value){
  // comparamos el valor
  if(value > this.value){
    // me voy a la derecha
    //si no hay nada a la derecha
    if(this.right === null){
      // lo agrego
      this.right = new BinarySearchTree(value)
    }else{
      // si hay algo en la derecha
      this.right.insert(value)
    }
  }else{
    // me voy a la izquierda
    if(this.left === null){
      // lo agrego
      this.left = new BinarySearchTree(value)
    }else{
      // si hay algo en la derecha
      this.left.insert(value)
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  if(value === this.value) return true;
  // si es mas grande me fijo en la derecha.
  if(value > this.value){
    // si no tengo nada
    if(this.right === null) return false
    // si tengo derecha
    return this.right.contains(value)
  }else{
    // me fijo en la izquierda
    if(this.left === null) return false
    return this.left.contains(value)
  }
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  // primero se define el orden en el que va a recorrer. (o en caso de que no se defina un orden)
  if(order === "in-order" || !order){
    // primero va la izquierda, desp nodo y desp derecha
    // pregunta si tiene izquierda, si es true, ejecuta lo que sigue
    this.left && this.left.depthFirstForEach(cb, order);
    // nodo
    cb(this.value);
    // derecha
    this.right && this.right.depthFirstForEach(cb, order);
  }else if(order === "pre-order"){
    // primero el nodo
    cb(this.value);
    // derspues izquierda
    this.left && this.left.depthFirstForEach(cb, order);
    // despues derecha
    this.right && this.right.depthFirstForEach(cb, order);
  }else{
    // post order
    // primero izquierda
    this.left && this.left.depthFirstForEach(cb, order);
    // depsues derecha
    this.right && this.right.depthFirstForEach(cb, order);
    // al final el nodo
    cb(this.value);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
  // me creo un arreglo para guardar los valores en caso de que no haya uno
  if (!arr){
    var arr = []
  }
  // ejecutas con el primer valor y guardas los valores de los hijos que tiene.
  cb(this.value);

  this.left && arr.push(this.left);
  this.right && arr.push(this.right);

  arr.length && arr.shift().breadthFirstForEach(cb, arr);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
