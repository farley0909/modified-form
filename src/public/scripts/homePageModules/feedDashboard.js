import { feedAnswers } from "./feedAnswers.js";
import { getResearchs } from "./getResearchs.js"
import { getToken } from "./getToken.js"
import { insereRespostas } from "./insereRespostas.js";

async function feedDashboard(research){
    console.log("Research recebida: ", research)
    let token = getToken()
    let researchs = await getResearchs(token)   
    console.log(researchs)
    researchs.pesquisas.forEach(el => {
        if(el.research === research){
            feedAnswers(el)
            console.log(el)
            let data = document.getElementById('research_date')
            data.innerHTML=""+el.creationDate
            let pesquisa_dashboard = document.getElementById('pesquisa_dashboard')
            pesquisa_dashboard.innerHTML=" "+el.research
            let link = document.getElementById('linkResearch')
            link.value="http://localhost:8080/resposta/"+el.id
           // getRespostas(el.id, token)
            if(el.answerable){
                console.log(el.answerable)
                document.getElementById('switchRespondivel').checked = true;
                
            }else{
                console.log(el.answerable)
                document.getElementById('switchRespondivel').checked = false;
            }
        }
    });

}
async function getRespostas(id, token){
   
    try {
        let data = {
             id:id
        }
        let req = await fetch("http://localhost:8080/respostas/listar/"+token,  {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let res = await req.json()
        insereRespostas(res.respostas)
    } catch (error) {
        console.log('error ao pegar as respsotas', error.message)
    }
}
export { feedDashboard }