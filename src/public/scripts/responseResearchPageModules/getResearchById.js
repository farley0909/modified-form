async function getResearchById(id){
    console.log("Esse é o id:", id)
    try {
        
        let req = await fetch(`/pesquisa/id/${id}`)
        let res = await req.json()
        return res.pesquisa
    } catch (error) {
        console.log('Houve um erro ao buscar a pesquisa: ', error.message)
    }
   
}
export {getResearchById}