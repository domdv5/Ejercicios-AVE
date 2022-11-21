let valor1 = parseInt(prompt("ingrese el primer valor a mulitplicar"))
let valor2 = parseInt(prompt("ingrese el segundo valor a multiplicar"))

let acumulador = 0

for(let i = 0; i < valor2; i++){
    acumulador += valor1
}

console.log(`El resultado de la multiplicacion es: ${acumulador}`);