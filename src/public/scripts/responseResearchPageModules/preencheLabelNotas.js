function preencheLabelNotas(respostas){
    let lbResposta1 = document.getElementById("nota-resposta1")
    let lbResposta2 = document.getElementById("nota-resposta2")
    let lbResposta3 = document.getElementById("nota-resposta3")
    lbResposta1.innerHTML=""+respostas[0]
    lbResposta2.innerHTML=""+respostas[1]
    lbResposta3.innerHTML=""+respostas[2]
}
export {
    preencheLabelNotas
}