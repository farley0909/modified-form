function closeDashboard(){
    let fade = document.getElementById('fade')
    let mainContent = document.getElementById('Conteudo-principal')
    let modal = document.getElementById('moodal-dashboard')
    let list = document.querySelectorAll('#tbResposta1')
    list.forEach(el=>{
        el.parentNode.removeChild(el)
    })
    let h2 = document.querySelectorAll('#dashboard-respostas h2')
    h2.forEach(el=>{
        el.parentNode.removeChild(el)
    })
  console.log(list)
    mainContent.style.display="block"
    fade.style.display="none"
    modal.style.display="none"
    btnModal.style.display="block"
}
export { closeDashboard }