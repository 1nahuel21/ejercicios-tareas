class Estudiante {
    nombre = "nahuel"
    asignaturas = ["javascript", "hTML", "CSS"]
    
    obtendatos(){
        return{
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}
const estudiante = new Estudiante()

console.log(estudiante.obtendatos())