import { closeDashboard } from "./homePageModules/closeDashboard.js"
import { closeModal } from "./homePageModules/closeModal.js"
import { copy } from "./homePageModules/copy.js"
import { createList } from "./homePageModules/createList.js"
import { getResearchs } from "./homePageModules/getResearchs.js"
import { getToken } from "./homePageModules/getToken.js"
import { getUserData } from "./homePageModules/getUserData.js"
import { insertUserData } from "./homePageModules/insertUserInfo.js"
import { openModal } from "./homePageModules/openModal.js"
import { removePesquisa } from "./homePageModules/removePesquisa.js"
import { sendResearch } from "./homePageModules/sendResearch.js"
import { setRespondivel } from "./homePageModules/setRespondivel.js"
import { showConfigTab } from "./homePageModules/showConfigTab.js"
import { showPerguntasTab } from "./homePageModules/showPerguntasTab.js"
import { showRespostasTab } from "./homePageModules/showRespostasTab.js"

const btnCloseRespostaDados = document.getElementById('btnCloseRespostaDados') 
const btnModal = document.getElementById('btnModal') 
const btnCancelar = document.getElementById('btnCancelar') 
const btnSalvar = document.getElementById('btnSalvar')
const btnCloseDashboard = document.getElementById("btnClosheDashboard") 
const btnTabRespostas = document.getElementById("tabRespostas")
const btnTabPerguntas = document.getElementById("tabPerguntas")
const btnTabConfig = document.getElementById("tabConfig")
const btnDeletaPesquisa = document.getElementById("btnDeletaPesquisa")
const btnCopy = document.getElementById("btnCopyLink")
const switchRespondivel = document.getElementById("switchRespondivel")
let respondivel = true
switchRespondivel.addEventListener("click", ()=>{
   setRespondivel()
})

btnCopy.addEventListener('click', copy)
btnDeletaPesquisa.addEventListener('click', removePesquisa )
btnTabRespostas.addEventListener('click', showRespostasTab)
btnTabConfig.addEventListener('click', showConfigTab)
btnTabPerguntas.addEventListener('click', showPerguntasTab)
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
    if(pesquisas.pesquisas.length === 0){
    }else{
        createList(pesquisas)
    }
}
main()










