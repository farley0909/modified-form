function showPerguntasTab(){
    let btnResposta = document.getElementById("tabRespostas")
    let btnPerguntas = document.getElementById("tabPerguntas")
    let btnConfig = document.getElementById("tabConfig")
    let tabConfig = document.getElementById("dashboard-config")
    let tabPergunta = document.getElementById("dashboard-perguntas")
    let tabRespostas = document.getElementById("dashboard-respostas")
    tabConfig.style.display="none"
    tabPergunta.style.display="block"
    tabRespostas.style.display="none"

    btnConfig.classList.remove('selecionado')
    btnResposta.classList.remove('selecionado')
    btnPerguntas.classList.add('selecionado')
    
}
export {showPerguntasTab}