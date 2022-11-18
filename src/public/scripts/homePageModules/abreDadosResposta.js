function abreDadosResposta(resposta){
    let modal = document.getElementById("modal-respostasDados")
    modal.style.display="block"
    document.getElementById("respost1Td").innerHTML=""+resposta.resposta1
    document.getElementById("respost2Td").innerHTML=""+resposta.resposta2
    document.getElementById("respost3Td").innerHTML=""+resposta.resposta3
    document.getElementById("nota1Td").innerHTML=""+resposta.avaliacao1
    document.getElementById("nota2Td").innerHTML=""+resposta.avaliacao2
    document.getElementById("nota3Td").innerHTML=""+resposta.avaliacao3
    document.getElementById("jus1Td").innerHTML=""+resposta.justificativa1
    document.getElementById("jus2Td").innerHTML=""+resposta.justificativa2
    document.getElementById("jus3Td").innerHTML=""+resposta.justificativa3
}
export {abreDadosResposta}