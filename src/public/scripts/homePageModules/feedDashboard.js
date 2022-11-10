import { getResearchs } from "./getResearchs.js"
import { getToken } from "./getToken.js"

async function feedDashboard(research){
    let token = getToken()
    let researchs = await getResearchs(token)   
    console.log('research: ', researchs)
    researchs.pesquisas.forEach(el => {
        if(el.questao === research){
            console.log(el)
            let data = document.getElementById('research_date')
            data.innerHTML=""+el.data_criacao
            let pesquisa_dashboard = document.getElementById('pesquisa_dashboard')
            pesquisa_dashboard.innerHTML=" "+el.questao
            let link = document.getElementById('linkResearch')
            link.value="http://localhost:8080/resposta/"+el.id
        }
    });

}

export { feedDashboard }