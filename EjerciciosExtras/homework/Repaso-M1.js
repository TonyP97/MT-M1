const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    let suma = 0;
    // caso de corte
    if (array.length <= 1) return array;

    // separo y recorro el array
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])){
            suma = suma + countArray(array[i]);
        }else{
        suma = suma + array[i];
        }
    }
    return suma;
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    let contador = 0;
    for (prop in obj){ // reviso las propiedades del objeto
        if (typeof obj[prop] == "object" && !Array.isArray(obj[prop])){ // si la propiedad es un objeto y ese no es un array, aplico recursion sobre ese objeto de la propiedad
            contador = contador + countProps(obj[prop]);
        }
        contador++; // aumento el contador con cada propiedad
    }
    // contador = Object.keys(obj).length
    return contador
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    let contador = 0;
    let current = this.head;
    while(current){
        if(isNaN(Number(current.value))){ // is NotaNumber ese valor al que estoy viendo si es un numero
            current.value = "Kiricocho" // si devuelve true, porque no es un numero, le reemplazo el valor por kiricocho.
            contador++; // se le suma 1 para devolver la cantidad de cambios que hizo
        }
        current = current.next; // si no se cumple lo de arriba, pasa al siguiente current.
    }
    return contador;
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    let newQueue = new Queue;
    while(queueOne.size() || queueTwo.size()) {// Mientras las queues tengan algo. nos fijamos con la funcion size ya implementada en el archivo ds.
        // a cada una de las listas vamos a sacar un elemento y agregarlo a la nueva lista.
        if(queueOne.size()){ // Si este elemento tiene algo, se lo voy a sacar y lo voy a guardar en una variable
            let first = queueOne.dequeue();
            newQueue.enqueue(first);
        }
        if(queueTwo.size()){
            let second = queueTwo.dequeue();
            newQueue.enqueue(second);
        }
    }
    return newQueue; // despues de haber comprobado si tenian elementos los queues, y haberlos pusheado en orden al nuevo queue. retornamos el newqueue
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    return function(num){
        return num * multiplier; // retorna una funcion a la que le paso un valor, y esa funcion me retorna el valor multiplicado por el valor de la primer funcion
    }

}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    // if (this.value === null) {return 0};
    // var sumador = this.value
    // if(this.left && !this.rigth){
    //     if (typeof this.left.value == "number"){
    //         sumador = sumador + this.left.value;
    //         return this.left.sum()
    //     }
    // }
    // if(this.right && !this.left){
    //     if(typeof this.right.value == "number"){
    //         sumador = sumador + this.right.value;
    //         return this.right.sum()
    //     }
    // }
    // if(this.right && this.left){
    //     if(typeof this.left.value == "number" && typeof this.right.value == "number")
    //         sumador = sumador + this.left.value + this.right.value;
    //         return this.left.sum() + this.right.sum();
    // }
    // return sumador;
    if (!this.left && !this.right) return this.value;
    if (!this.right){
        return this.value + this.left.sum()
    }
    if (!this.left){
        return this.value + this.right.sum()
    }
    return this.value + this.right.sum() + this.left.sum();
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}