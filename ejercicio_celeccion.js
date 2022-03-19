//el partido democratico tiene 20 senadores 
//qu contiene nombre, sexo {1 hombre 0 mujer } y numero de votos 
//1 obtener solo las mujerfes que obtienen mas de 250 otos 
//mostrar los votos de las mujeres mayores a 250 despues de 10 seg 
let nombres =['paloma petro ', 'talavaro cepeda ','polo Inverso','juan pis gonzales']
let sexos =['0', '1']
let voto =[]

let senadores =[]

for (let i=0 ; i <20; i ++){
    //si voy a llenar un objeto de arreglos siempre se debe crear el objeto dentro del ciclo 
    let senador= {}
    //llenando un objeto de estudiantes 
    senador.nombre=(nombres[Math.floor(Math.random()*nombres.length)])
    senador.sexo=(sexos[Math.floor(Math.random()*sexos.length)])
    senador.voto=Math.floor(Math.random()*500)

    //agregando el objeto estudiante al arreglo estudiantes 
    senadores.push(senador)

}
function filtrar_mujeres (senadores, callback){
    setTimeout(function(){
        let senadoras = senadores.filter(function(senador){
            return(senador.sexo=='0' && senador.voto>= 250)
        })
        callback (senadoras)
    },10000)
}
//llamando la fucnion principal 
filtrar_mujeres(senadores, function(senadoras){
    let = suma_votos=0
    senadoras.forEach(function(senadora){
        suma_votos+=senadora.voto

    })
    console.log(senadoras)
    console.log(`el total de votos femenino es: ${suma_votos} `)
})
