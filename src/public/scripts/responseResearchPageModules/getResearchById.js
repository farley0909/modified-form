async function getResearchById(id){
    try {
        let req = await fetch(`/pesquisa/id/${id}`)
        let res = await req.json()
        return res.pesquisa
    } catch (error) {
        console.log('Houve um erro ao buscar a pesquisa: ', error.message)
        throw new Error("Houve um erro ao buscar a pesquisa")
    }
   
}
export {getResearchById}