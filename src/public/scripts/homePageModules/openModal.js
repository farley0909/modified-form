function openModal(){
    let fade = document.getElementById('fade')
    let mainContent = document.getElementById('Conteudo-principal')
    let modal = document.getElementById('modal')
    mainContent.style.display="none"
    fade.style.display="block"
    modal.style.display="block"
    btnModal.style.display="none"
}
export { openModal }