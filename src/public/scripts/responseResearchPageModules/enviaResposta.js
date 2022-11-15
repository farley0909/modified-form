async function enviaResposta(notas, respostas, justificativas, pesquisa){
    console.log("notas", notas)
    console.log("respostas", respostas)
    console.log("justificativas", justificativas)
    console.log("pesquisaId", pesquisa)
    try {
        let data = {
            notas: notas,
            respostas: respostas,
            justificativas:justificativas,
            idPesquisa: pesquisa.id
        }
        let req = await fetch(`http://localhost:8080/respostas/cadastro/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let res = await req.json()
        console.log(res)
    } catch (error) {
       console.log(error.message) 
    }
}
export { enviaResposta }