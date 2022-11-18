function getJustificativas(){
    let jsutificativas
    let just1 = document.getElementById('justificativaText') 
    console.log("Justificativa que pegou: ", just1.value)
    if(just1.value ===""){
        just1.classList.add("invalid")
        throw new Error("Um dos campos esta vazio")
    }else{
        jsutificativas = just1.value
        return jsutificativas 
    }
}
export { getJustificativas }