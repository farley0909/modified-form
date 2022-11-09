function closeModal(){
    let fade = document.getElementById('fade')
    let mainContent = document.getElementById('Conteudo-principal')
    let modal = document.getElementById('modal')
    mainContent.style.display="block"
    fade.style.display="none"
    modal.style.display="none"
    btnModal.style.display="block"
}
export { closeModal }