import { getResearchs } from "./getResearchs.js";
import { getToken } from "./getToken.js"

async function setRespondivel(){
   // let req = await fetch(`http://localhost:8080/pesquisa/respondivel/${token}`)
   let research = document.getElementById("pesquisa_dashboard").innerHTML
    let trim = research.trim()
    let token = getToken()
    let researchs = await getResearchs(token)   
    researchs.pesquisas.forEach(async el => {
        if(el.questao === trim){
           try {
            let data = {
                id: el.id
            }
            let req = await fetch(`http://localhost:8080/pesquisa/respondivel/${token}`, {
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
    })
}
export { setRespondivel }