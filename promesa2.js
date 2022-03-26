function principal(ususario,password,callback){
    setTimeout(function(){
        if (ususario=="james123"&&password=="admin123"){
            callback(true)
        }else{
            callback(false)}
    },5000)
}
principal('juanes128','loguin123',function(bandera){
    if(bandera==true){
        console.log("bienvenido")
    }else{
        console.log("revise los datos")
    }
})