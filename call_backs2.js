//declaro la funcion pricipall
function crear_usuario (nombre, edad, callback){
    setTimeout(function(){
       //Proceso principal 
        let usuario = {
            nombre_usuario:nombre,
            edad_usuario:edad
        }
        //llamadno al Callback
        callback(usuario)

    },1000)
}

//llamo la funcion principal 

crear_usuario("james la banca",40,function(usuario){
    if (usuario.edad_usuario>=18){
        console.log("bienvenido")
    }else{
        console.log("ups, no puedes entrar!!")
    }

})