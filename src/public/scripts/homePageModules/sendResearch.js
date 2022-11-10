import { closeModal } from "./closeModal.js"
import { getResearchs } from "./getResearchs.js"
import { openDashboard } from "./openDashBoard.js"
async function sendResearch(token){
    let pesquisa = document.getElementById('pergunta').value
    try{
        let ul = document.getElementsByClassName('collection')
        let a = document.createElement('a')
        a.classList.add('collection-item')
        a.innerHTML=""+pesquisa
        ul[0].appendChild(a)
            try {
                let request = await fetch(`http://localhost:8080/pesquisas/cadastro/${token}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({questao: pesquisa})
                })
                let res = await request.json()
            
                closeModal()
            } catch (error) {
                console.log("Houve um erro na request de cadastro da pesquisa: ", error)
            }
        }catch(error){
        try {
            let request = await fetch(`http://localhost:8080/pesquisas/cadastro/${token}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({questao: pesquisa})
            })
            console.log('entrou no try quando n tem ul')
            let res = await request.json()
            let divPesquisas = document.getElementById('pesquisas')
            let ul = document.createElement('ul')
            ul.classList.add('collection')
            let pesquisas =await getResearchs(token)
            console.log(pesquisas)
            let a = document.createElement('a')
            a.classList.add('collection-item')
            a.addEventListener('click', ()=>{
                openDashboard(pesquisas.pesquisas[0].questao)
            })

            a.innerHTML=""+pesquisa
            ul.appendChild(a)
            divPesquisas.appendChild(ul)
            closeModal()
        } catch (error) {
            console.log("Houve um erro na request de cadastro da pesquisa: ", error)
        }
    }
 }
 export { sendResearch }