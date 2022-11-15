import { closeDashboard } from "./closeDashboard.js"

function apagaPesquisaLista(pesquisa){
    let lista = document.getElementById("listaPesquisas")
    let childs = lista.childNodes
    console.log(childs)
    childs.forEach(el => {
        if(el.innerHTML === pesquisa){
            el.parentNode.removeChild(el)
            if(childs.length==0){
                lista.parentNode.removeChild(lista)
            }
            closeDashboard()
        }
    })
}
export { apagaPesquisaLista }