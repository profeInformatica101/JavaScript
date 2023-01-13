//Crea una lista de números pares del 2 al 20 utilizando un bucle while.

let pares = [];
let num = 2;
while (num <= 20) {
  pares.push(num);
  num += 2;
}
console.log(pares);

//Crea una lista de números impares del 1 al 19 utilizando un bucle for.

let impares = [];
for (let i = 1; i < 20; i += 2) {
  impares.push(i);
}
console.log(impares);

//Crea una lista de comida.
let comida = ['pizza', 'hamburguesa', 'ensalada'];
console.log(comida);

//Agrega un elemento al principio de la lista de comida que creaste en el ejercicio anterior.
comida.unshift('sopa');
console.log(comida);

//Accede al segundo elemento de la lista de comida y cambia su valor por un plato diferente.
comida[1] = 'paella';
console.log(comida);

//Recorre la lista de comida utilizando un bucle while y muestra cada elemento en la consola.
let i = 0;
while (i < comida.length) {
  console.log(comida[i]);
  i++;
}

//Crea una función que reciba una lista como parámetro y devuelva el último elemento de la lista.
function ultimo_elemento(lista) {
  return lista[lista.length - 1];
}
console.log(ultimo_elemento(comida));

//Crea una función que reciba una lista y un elemento como parámetros y agregue el elemento a la lista si no se encuentra en ella.
function agregar_elemento(lista, elemento) {
  if (!lista.includes(elemento)) {
    lista.push(elemento);
  }
  return lista;
}
console.log(agregar_elemento(comida, 'sushi'));

//Crea una función que reciba una lista como parámetro y devuelva una nueva lista con los elementos de la lista original en orden inverso.
function invertir_lista(lista) {
  return lista.slice().reverse();
}
console.log(invertir_lista(comida));

/** 
// Crea una función que reciba una lista de números como parámetro y devuelva la suma de todos los números de la lista.
function sumar_numeros(lista) {
  return lista.reduce((acc, val) => acc + val, 0);
}
let numeros = [1, 2, 3, 4, 5];
console.log(sumar_numeros(numeros));
*/

//Crea una función que reciba una lista de números como parámetro y devuelva la suma de todos los números de la lista

function sumar_numeros(lista) {
   // return lista.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let sum = 0;
    for(let n of lista){
        sum+=n;
    }
   return sum;
}

  let numeros = [1, 2, 3, 4, 5];
  console.log("Sumar números: "+ sumar_numeros(numeros));


  //11. Crea una función que reciba una lista de números como parámetro y devuelva la media de todos los números de la lista.

  function media_numeros(lista) {
    return sumar_numeros(lista) / lista.length;
  }
  console.log("Media números: " + media_numeros(numeros));


  function enlaceReduce(){
// Crea un enlace
var enlace = document.createElement("a");

// Establece la URL del enlace
enlace.href = "https://www.youtube.com/watch?v=g1C40tDP0Bk";

// Establece el texto del enlace
enlace.innerHTML = "JavaScript Array Reduce";

// Agrega el enlace al documento
document.body.appendChild(enlace);

  }

  enlaceReduce();
