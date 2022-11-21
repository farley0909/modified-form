function getNotas(){
    let notas
    let group1 = document.querySelectorAll('.group1')
    group1.forEach(el => {
        if(el.checked){
            notas = el.value
        }     
    })
    if(notas.length<1){
        group1.forEach(el => {
           document.getElementById("notas-vazias").style.display="block"
           throw new Error("Um dos campos está vazio")
        })     
    }else{
        return notas
    }

}
export { getNotas }