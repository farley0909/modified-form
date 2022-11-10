import { getResearch } from "./responseResearchPageModules/getResearch.js"
let btnProximo = document.getElementById('btnProximo')
btnProximo.addEventListener('click', async ()=>{
    let path = location.pathname
    let splitado = path.split('/')
    let id = splitado[2]
    let pesquisa = await getResearch(id)
})