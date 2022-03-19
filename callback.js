//declarano la funcion principal 

function principal (callback){
setTimeout(function(){
    //definiendo el proceso de la funcion principal 
    console.log("soy el proceso principal")
    //llamando al calback
    callback()
    },2000)
}

//llamando la funcion principal 
principal(function(){
    //procso del callback
    console.log("soy el proceso del callback ")
})