import { apagaPesquisaLista } from "./apagaPesquisaLista.js"
import { closeDashboard } from "./closeDashboard.js"
import { getResearchs } from "./getResearchs.js"
import { getToken } from "./getToken.js"

async function removePesquisa(){
    try {
        let token = getToken()
        let pesquisa = document.getElementById("pesquisa_dashboard")
        let researchs = await  getResearchs(token)
        
        researchs.pesquisas.forEach(async element => {
            let noSpaces = pesquisa.innerHTML.trim()
            let compara = noSpaces.localeCompare(element.questao)
            if(compara===0){
                try {
                        console.log("Esse é o id que esta sendo enviado pra rota de remoção: ", element.id)
                        let request = await fetch(`http://localhost:8080/pesquisa/remover/${token}`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({id: element.id})
                    })
                    let res = await request.json()
                    console.log(res)
                    if(res.status===true){
                        apagaPesquisaLista(noSpaces)
                    }
                }catch (error) {
                    console.log(error.message)
                }
            }
            
           
        });



       /* 
        let request = await fetch(`http://localhost:8080/pesquisa/remover/${token}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: pesquisa})
            })
        closeDashboard()*/
    } catch (error) {
        console.log("Houve um erro na requisição de remoção", error.message)
    }
}
export {removePesquisa}