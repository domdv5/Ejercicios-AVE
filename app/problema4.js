// ● Cantidad de elementos del arreglo

const arreglo = [55,34,4556,77,33,980,2,8,1,17,1001,13,17,244,56,88,92]

console.log(arreglo.length);

// ● Porcentaje de números pares e impares.

/* const arreglo = [55,34,4556,77,33,980,2,8,1,17,1001,13,17,244,56,88,92]

let contadorPares = 0
let contadorImpares = 0

for(let i = 0 ; i < arreglo.length; i++){

    if(arreglo[i] % 2 === 0){
        contadorPares++
    }else{
        contadorImpares++
    }
}

const porcentajePares = (contadorPares / arreglo.length * 100).toFixed(2)
const porcentajeimpares = (contadorImpares / arreglo.length * 100).toFixed(2)

console.log(`El porcentaje de numeros pares es: ${porcentajePares}`);
console.log(`El porcentaje de numeros impares es: ${porcentajeimpares}`); */

// Porcentaje de números mayores a 1000.

/* const arreglo = [55, 34, 4556, 77, 33, 980, 2, 8, 1, 17, 1001, 13, 17, 244, 56, 88, 92]

let condicion = 1000
let contador = 0

for (let i = 0; i < arreglo.length; i++) {

  if (arreglo[i] > condicion) {
    contador++
  }
}

const porcentaje = (contador / arreglo.length * 100).toFixed(2)

console.log(`El porcentaje de numeros mayores a 1000 es: ${porcentaje}`) */

//Cuál es el mayor y menor valor.

/* const arreglo = [55, 34, 4556, 77, 33, 980, 2, 8, 1, 17, 1001, 13, 17, 244, 56, 88, 92]

const maximo = Math.max(...arreglo)
const minimo = Math.min(...arreglo)


console.log(`El numero mayor es: ${maximo}`)
console.log(`El numero menor es: ${minimo}`); */

//Asuma los siguientes indicadores: Tome en cuenta que el mayor número
//representa el 100%, indique cual es el porcentaje del número mínimo y el
//porcentaje del promedio de todos los números.

/* const arreglo = [55, 34, 4556, 77, 33, 980, 2, 8, 1, 17, 1001, 13, 17, 244, 56, 88, 92]

const maximo = Math.max(...arreglo)
const minimo = Math.min(...arreglo)
let sum = 0

const porcentaje = maximo * (minimo / 100)

console.log(`El porcentaje del numero minimo es ${porcentaje}`);

for (let i = 0; i < arreglo.length; i++) {
  sum += arreglo[i]
}

const prom = parseFloat((sum / arreglo.length).toFixed(2))

console.log(`El porcentaje del promedio de todos los numeros es ${prom}`); */



