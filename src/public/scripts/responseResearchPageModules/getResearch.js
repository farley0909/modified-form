async function getResearch(id){
    try {
        let req = await fetch(`http:localhost:8080/resposta/id/${id}`)
        let res = await req.json()
        return res 
    } catch (error) {
        console.log('Houve um erro ao buscar a pesquisa: ', error.message)
    }
   
}
export {getResearch}