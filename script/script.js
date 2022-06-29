let nombrePlanetas=Array("tierra","marte")
let distancia=[6,3,"67"]
const tamaño =[]

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)
nombrePlanetas.forEach(e=>{
    console.log(e)
})
distancia.forEach(e=>{
    if (e==5){
        console.log("se encontro la distancia")
    }else{
        console.log("no se encontro la distancia")
    }
})