
 async function getResearchs(token){
    try {
        let req = await fetch(`http://localhost:8080/pesquisas/${token}`)
        let res = await req.json()
        return res 
    } catch (error) {
        console.log('Erro ao pegar pesquisas:'+error)
    }
  
 }
 export { getResearchs }