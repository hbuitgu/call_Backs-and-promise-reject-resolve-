
//declarando la funcion principal 
function principal(ususario,password,){
    setTimeout(function(){
        let promesa= new Promise(function(resolve,reject){
            
        if (ususario=="james123"&&password=="admin123"){
            //un objeto tipo promesas 
          resolve("bienvenido")
        }else{
            reject("sigalo intentando cucho")

            }
        })
        return(promesa)   
},5000)

}
principal('juanes128','loguin123')
//manejo de excepcion del cumplimiento de una promesa 
.them(function(respuesta_resolve){
    console.log(respuesta_resolve)
})
.catch(function(respuesta_rejec){
    console.log(respuesta_rejec)
})