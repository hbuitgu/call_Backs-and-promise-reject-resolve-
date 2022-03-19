//Funcion basica pra crear 50 objetos dentro de un arreglo 
//datos semilla 
let nombres =['juan', 'tyron','maxy','joao']
let cursos =['avanzada', 'nuevas', 'moviles 3']

//numeros aleatorios donde su limite esta dado por la longitud del arreglo semilla  
let numero = Math.floor(Math.random()*nombres.length)
let numero_2= Math.floor(Math.random()*cursos.length)

//imprimiendo un elemento de las semillas en forma aleatoria 
console.log(nombres[numero])
console.log(cursos[numero_2])

let estudiantes =[]

for (let i=0 ; i <50; i ++){
    //si voy a llenar un objeto de arreglos siempre se debe crear el objeto dentro del ciclo 
    let estudiante= {}
    //llenando un objeto de estudiantes 
    estudiante.nombre=(nombres[Math.floor(Math.random()*nombres.length)])
    estudiante.curso=(cursos[Math.floor(Math.random()*cursos.length)])

    //agregando el objeto estudiante al arreglo estudiantes 
    estudiantes.push(estudiante)

}
console.log(estudiantes)
