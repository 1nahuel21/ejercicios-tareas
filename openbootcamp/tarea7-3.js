const fechaHoy = new Date();
console.log(fechaHoy)
const FechaNacimiento = new Date(2000,11,24)
const ComparacionFechas = fechaHoy > FechaNacimiento
console.log(ComparacionFechas)
const diaNacimiento = FechaNacimiento.getDate()
console.log(diaNacimiento)
const mesNacimiento =FechaNacimiento.getMonth()
console.log(mesNacimiento)
const anyoNacimiento = FechaNacimiento.getFullYear()
console.log(anyoNacimiento)