function showConfigTab(){
    let btnResposta = document.getElementById("tabRespostas")
    let btnPerguntas = document.getElementById("tabPerguntas")
    let btnConfig = document.getElementById("tabConfig")
    let tabConfig = document.getElementById("dashboard-config")
    let tabPergunta = document.getElementById("dashboard-perguntas")
    let tabRespostas = document.getElementById("dashboard-respostas")
    tabConfig.style.display="block"
    tabPergunta.style.display="none"
    tabRespostas.style.display="none"

    btnPerguntas.classList.remove('selecionado')
    btnResposta.classList.remove('selecionado')
    btnConfig.classList.add('selecionado')
    
}
export {showConfigTab}