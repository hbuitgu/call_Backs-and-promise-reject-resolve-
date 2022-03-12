//Declarano la funcion pricipal 
function principal (nombre, callack){
    setTimeout(function(){
        //proceso ((¿qué hace esta funcion?))
        console.log("Hola "+nombre)
        //llamo al callack
        Callback()
    },4000)
}
//llamando la funcion principal
//es una funcion secuindaria que sirve como parametro de la funcion de la funcion principal y solo se llama si el proceso de la funcion principal ya termino 
principal("Andres",function(){
    console.log("como estas, soy el callback")
})
