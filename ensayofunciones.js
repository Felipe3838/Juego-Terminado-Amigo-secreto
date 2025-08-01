//Crea una lista vacía llamada "listaGenerica".

let listaGenérica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
// con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ["JavaScript","C", "C++", "Kotlin Python"];


//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
// 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push("java","Ruby","Golang");

//Crea una función que muestre en la consola todos los elementos de la lista
//  "lenguagesDeProgramacion.
function mostrarelemnetosLista() {
    console.log(lenguagesDeProgramacion);
}
mostrarelemnetosLista();

//Crea una función que muestre en la consola todos los elementos de la lista 
// "lenguagesDeProgramacion en orden inverso.

function MostrarElementosInvertidos() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}
MostrarElementosInvertidos();

//Crea una función que calcule el promedio de los elementos en una lista de números.

let numeros = [4,5,7,4]

function calcularPromedio() {
    let suma = 0;
    for(i = 0; i < numeros.length; i++)
    suma = suma + numeros[i];

    let promedio = suma/numeros.length
    console.log("la suma de los números es",suma)
    console.log("el promedio es:",promedio)
}
calcularPromedio();

//Crea una función que muestre en la consola el número más grande y el número más 
// pequeño en una lista.

function mostrarMayorYMenor() {
    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    console.log("El número más grande es:", mayor);
    console.log("El número más pequeño es:", menor);
}

mostrarMayorYMenor();

//Crea una función que devuelva la suma de todos los elementos en una lista.

function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros3 = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros3);
console.log('Suma:', suma);

//Crea una función que devuelva la posición en la lista donde se encuentra 
// un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva
//  una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado = sumarListas(lista1, lista2);
console.log(resultado);  

//Crea una función que reciba una lista de números y devuelva una nueva 
// lista con el cuadrado de cada número.

function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const lista = [2, 3, 4];
const miresultado = cuadradoLista(lista);
console.log(miresultado);  