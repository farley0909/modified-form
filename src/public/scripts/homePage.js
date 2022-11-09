import { closeDashboard } from "./homePageModules/closeDashboard.js"
import { closeModal } from "./homePageModules/closeModal.js"
import { createList } from "./homePageModules/createList.js"
import { getResearchs } from "./homePageModules/getResearchs.js"
import { getToken } from "./homePageModules/getToken.js"
import { getUserData } from "./homePageModules/getUserData.js"
import { insertUserData } from "./homePageModules/insertUserInfo.js"
import { openModal } from "./homePageModules/openModal.js"
import { sendResearch } from "./homePageModules/sendResearch.js"

const btnModal = document.getElementById('btnModal') 
const btnCancelar = document.getElementById('btnCancelar') 
const btnSalvar = document.getElementById('btnSalvar')
const btnCloseDashboard = document.getElementById("btnClosheDashboard") 

btnCloseDashboard.addEventListener('click', closeDashboard)
btnModal.addEventListener('click', openModal)
btnCancelar.addEventListener('click', closeModal)
btnSalvar.addEventListener('click', ()=>{
    let token = getToken()
    sendResearch(token)
})

async function main(){  
    const token = getToken()
    let pesquisas =await getResearchs(token)
    let dadosPesquisador = await getUserData(token)
    insertUserData(dadosPesquisador)
    console.log(pesquisas.pesquisas.length)
    if(pesquisas.pesquisas.length === 0){
        console.log("Lista vazia")
    }else{
        createList(pesquisas)
    }
}
main()










