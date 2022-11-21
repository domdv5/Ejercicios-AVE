let contra = prompt("Por favor ingrese una contrasena").split('')


let contadorTamano = 0
let contadorMinus = 0
let contadorMayus = 0
let contadorNumeros = 0
let contadorNumeroConsecutivo = 0
let contadorLetrasIguales = 0
let contadorEspeciales = 0
let contadorEspecialesIguales = 0
let contadorEspecialesConsecutivos = 0
let contadorCero = 0


// validacion tamano
contra.forEach((values, i, array) => {
  if (array.length >= 16) {
    contadorTamano++
  }
})


//validacion minus
contra.forEach(values => {
  if (values === values.toLowerCase()) {
    contadorMinus++
  }
})

//validacion mayus
contra.forEach(values => {
  if (values === values.toUpperCase()) {
    contadorMayus++
  }
})


//validacion letras consecutivas
for (let i = 0; i < contra.length; i++) {
  console.log(i);
  if (contra[i] === contra[i + 1]) {
    contadorLetrasIguales++
  }
}

//validacion cantidad de numeros
contra.forEach(values => {
  if (values > 0 || values <= 9) {
    contadorNumeros++
  }
})

//validacion numeros consecutivos
for (let i = 0; i < contra.length; i++) {
  if (contra[i] === contra[i + 1]) {
    contadorNumeroConsecutivo++
  }
}


//validacion total de caracteres especiales
const conditions = ["!", "@", "#", "$", "%", "*", "&", "*", "-", "_", "+", "=", "?"]

conditions.some(valor => {
  if (contra.includes(valor)) {
    contadorEspeciales++
  }
})


//validacion caracteres especiales en cualquier posicion
for (let i = 0; i < contra.length; i++) {
  if (contra.indexOf(conditions[i]) !== contra.lastIndexOf(conditions[i])) {
    contadorEspecialesIguales++
  }
}


//validacion caracteres especiales consecutivos
for (let i = 0; i < contra.length; i++) {
  if (contra[i] === contra[i + 1]) {
    contadorEspecialesConsecutivos++
  }
}

//validacion del cero y espacios
contra.forEach(values => {
  if (values.includes(0) || values.includes(" "))
    contadorCero++
})

if (contadorTamano >= 16 && contadorMinus > 0 && contadorMayus > 0 && contadorLetrasIguales === 0 && contadorNumeros >= 4 
  && contadorNumeroConsecutivo === 0 && contadorEspeciales >= 2 && contadorEspecialesIguales === 0 
  && contadorEspecialesConsecutivos === 0 && contadorCero === 0) {

  console.log("Felicidades su contrasena cumple con los criterios establecidos");

} else {
  console.log("Su contrasena no cumple con los criterios establecidos");
  console.log(
   ` Recuerde los criterios necesarios: 
  ● Debe tener al menos 16 caracteres.
  ● Debe tener letras minúsculas y mayúsculas.
  ● No puede tener 2 letras iguales consecutivas.
  ● Debe contener al menos 4 números.
  ● No puede tener 2 números iguales consecutivos.
  ● Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de
    ellos puede repetirse en ninguna posición y además los caracteres no pueden
    estar juntos.
  ● No se puede usar el número 0.
  ● No se puede colocar espacios.
  `);
}