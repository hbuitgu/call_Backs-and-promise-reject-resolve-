///ejercicio basado en recocorer arreglos, filtrar y llamar un call Back

function recibir_palnos (n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,callback){
    setTimeout(function(){
        let planos=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
        let filtro_planos =planos.filter(function(plano){
            return(plano  >=1 && plano <=10)
        })
        callback(filtro_planos)
    },2000)

}


recibir_palnos(11,20,14,150,200,250,300,400,500,1000, function(filtro_planos){
    if (filtro_planos.length > 0) {
        console.log("puedes irte, hay "+ filtro_planos.length +"planos")
    }else{
        console.log ("devuelvete")
    }
    
})