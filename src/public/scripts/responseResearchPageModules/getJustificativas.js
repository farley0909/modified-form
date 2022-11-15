function getJustificativas(){
    let jsutificativas = []
    let just1 = document.getElementById('justificativa1')
    let just2 = document.getElementById('justificativa2') 
    let just3 = document.getElementById('justificativa3') 
   
    if(just1.value ===""){
        just1.classList.add("invalid")
        throw new Error("Um dos campos esta vazio")
    }else if(just2.value === ""){
        just2.classList.add("invalid")
        throw new Error("Um dos campos esta vazio")
    }else if(just3.value===""){
        just3.classList.add("invalid")
        throw new Error("Um dos campos esta vazio")
    }else{
        jsutificativas.push(just1.value)
        jsutificativas.push(just2.value)
        jsutificativas.push(just3.value)
        return jsutificativas
      
    }
   

}
export { getJustificativas }