function showRespostasTab(){
    let btnResposta = document.getElementById("tabRespostas")
    let btnPerguntas = document.getElementById("tabPerguntas")
    let btnConfig = document.getElementById("tabConfig")
    let tabConfig = document.getElementById("dashboard-config")
    let tabPergunta = document.getElementById("dashboard-perguntas")
    let tabRespostas = document.getElementById("dashboard-respostas")
    tabConfig.style.display="none"
    tabPergunta.style.display="none"
    tabRespostas.style.display="block"

    btnPerguntas.classList.remove('selecionado')
    btnConfig.classList.remove('selecionado')
    btnResposta.classList.add('selecionado')
    
}
export {showRespostasTab}