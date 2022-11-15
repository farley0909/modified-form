function getNotas(){
    let justificativas = []
    let group1 = document.querySelectorAll('.group1')
    let group2 = document.querySelectorAll('.group2')
    let group3 = document.querySelectorAll('.group3')
    group1.forEach(el => {
        if(el.checked){
            justificativas.push(el.value)
        }
        
    })
    group2.forEach(el => {
        if(el.checked){
           justificativas.push(el.value)
        }
        
    })
    group3.forEach(el => {
        if(el.checked){
            justificativas.push(el.value)
        }
        
    })
    if(justificativas.length<3){
        document.getElementById("nota-resposta1").classList.add("invalido")
        document.getElementById("nota-resposta2").classList.add("invalido")
        document.getElementById("nota-resposta3").classList.add("invalido")
        document.getElementById("notas-vazias").style.display="block"
        
        throw new Error("Um dos campos está vazio")
    }else{
        return justificativas
    }

}
export { getNotas }