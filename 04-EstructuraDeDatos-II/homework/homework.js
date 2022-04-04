'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this._length=0;
  this.head = null;
}

function Node(value){
  this.value=value;
  this.next=null;
}



LinkedList.prototype.add = function(data){  
  let node = new Node(data)
  

//  let aux;
  let current = this.head;
  if(!current){
    this.head = node;  
    this._length++;
    return node;
  }

  while(current.next){
    current = current.next;
  }

  current.next = node;
  this._length++;
  return node;
}

LinkedList.prototype.remove = function(value){
  let current = this.head;
  if(this.head === null){
    return null;
  }

 
   if(current && !current.next) {
     let aux = current.value;
     this.head = null;
     this._length--;// no estoy seguro que esto elimine al nodo
     return aux;
  }

  while(current.next.next){
    current = current.next;
  }

  let aux = current.next.value;
  current.next = null;
  this._length--;
  return aux;
}

LinkedList.prototype.search = function(value){
  let current = this.head;

  while(current){
    if(current.value === value){
      return value;
    }
    else if(typeof value === 'function'){
      if(value(current.value)){
        return current.value;
      }
    }
    current = current.next;
  }
  return null;
}




// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.contenedor=[];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(key){ //nos retorna la suma y el modulo
  let suma=0; 
  let i=0;
  while(i<key.length){
    suma += key.charCodeAt(i);
    i++;
  }
  return suma % this.numBuckets;
}

HashTable.prototype.hasKey = function(key){
  let index = this.hash(key);
  let ret = this.contenedor[index].hasOwnProperty(key);

  if(ret){
    return true;
  }

  return false;
}

HashTable.prototype.get = function(key){
  let i = this.hash(key);

  return this.contenedor[i] ? this.contenedor[i][key] : undefined;

}

HashTable.prototype.set = function(key, value){ //obtiene la llave, manda a llamar a hash para obtener le modulo
  if(typeof key !== 'string'){                  // verifica que el indice del arreglo sea vacio 
    throw new TypeError('keys must be strings');
  }
  let index = this.hash(key);
  if(this.contenedor[index] === undefined){
    this.contenedor[index] = {};
  }
  this.contenedor[index][key] = value;
}






// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
