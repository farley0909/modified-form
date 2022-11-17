function getNotas(){
    let justificativas = []
    let group1 = document.querySelectorAll('.group1')
    group1.forEach(el => {
        if(el.checked){
            justificativas.push(el.value)
        }
        
    })
    if(justificativas.length<1){
        group1.forEach(el => {
           document.getElementById("notas-vazias").style.display="block"
           throw new Error("Um dos campos está vazio")
        })     
    }else{
        return justificativas
    }

}
export { getNotas }