let valor1 = parseInt(prompt("ingrese un valor"))
let valor2 = parseInt(prompt("ingrese otro valor"))

let acumulador = 0

for(let i = 0; i < valor2; i++){
    acumulador += valor1
}

console.log(acumulador);