let nombrePlanetas=Array("tierra","marte")
let distancia=[6,3,"67"]
const tamaño =[]

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)
nombrePlanetas.forEach((e,index)=>{
    console.log("planeta",index,e)
})
distancia.forEach(e=>{
    if (e==6){
        console.log("se encontro la distancia")
    }else{
        console.log("no se encontro la distancia")
    }
})
nombrePlanetas.map((planetas,index)=>{
    return(console.log(`el planeta ${planetas}tiene un tamaño de :${tamaño[index]} `))
})