function openJustification(){
    let modal = document.getElementById("modal")
    let modalNota = document.getElementById("modal-nota")
    let modalJustificativa = document.getElementById("modal-justificativa") 
    modal.style.display="none"
    modalNota.style.display="none"
    modalJustificativa.style.display="block"
}
export {
    openJustification
}