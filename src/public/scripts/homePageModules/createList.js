import { openDashboard } from "./openDashBoard.js"

async function createList(content){
    let pesquisas = await content
    let divPesquisas = document.getElementById('pesquisas')
    let ul = document.createElement('ul')
    ul.classList.add('collection')
    for(let k=0;k<pesquisas.pesquisas.length;k++){
        let a = document.createElement('a')
        a.classList.add("collection-item")
        a.addEventListener('click', ()=>{
            openDashboard(pesquisas.pesquisas[k].questao)
        })
        a.innerHTML=""+pesquisas.pesquisas[k].questao
        ul.appendChild(a)
    }
    divPesquisas.appendChild(ul)

}
export { createList }